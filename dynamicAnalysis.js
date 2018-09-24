/**
 * Created by marija on 29.07.16.
 */
/*
 * Copyright 2014 Samsung Information Systems America, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

// In the following callbacks one can choose to not return anything.
// If all of the callbacks return nothing, we get a passive analysis where the
// concrete execution happens unmodified and callbacks are used to observe the execution.
// Once can choose to return suitable objects with specified fields in some callbacks
// to modify the behavior of the concrete execution.  For example, one could set the skip
// field of an object returned from putFieldPre to true to skip the actual putField operation.
// Similarly, one could set the result field of the object returned from a write callback
// to modify the value that is actually written to a variable. The result field of the object
// returned from a conditional callback can be suitably set to change the control-flow of the
// program execution.  In functionExit and scriptExit,
// one can set the isBacktrack field of the returned object to true to reexecute the body of
// the function from the beginning.  This in conjunction with the ability to change the
// control-flow of a program enables us to explore the different paths of a function in
// symbolic execution.

//This is an analysis for the second run

(function (sandbox) {


    function MyAnalysis() {

        var fname = process.argv[7];
        var testFolder = process.argv[8];
        var fs = require('fs');


        var objectsToTrack = [];
        //fist set is useful for detecing properties of base obj and arguments, that are used and can be manipulated
        var propertyPaths = [];
        var pathsAfterCallback = [];
        //checks whether obj1 is reachable from obj2

        var trackReads = false;

        function reachable(obj1, obj2) {
            var seenObjects = [];
            if (obj1 === obj2) return true;
            for (var prop in obj2) {
                if (obj2[prop] === obj1) {
                    return true;
                }
                if (obj2[prop] !== null && typeof(obj2[prop]) == "object") {
                    if (!seenObjects.indexOf(obj2[prop])) {
                        //traversing further object properties
                        return reachable(obj1, obj2[prop]);
                    }

                }
            }
            return false;

        }

        function path(c, name, start, val) {

            //directly defined on an object
            if (c === val) return {'path': start};
            if (c instanceof Array) {
                if (name && c[name] === val) return {'path': start + "['" + name + "']"};
                for (var i in c) {
                    if (i && c[i] === val)  return {'path': start + "['" + i + "']"};
                    if (i && typeof c[i] === 'object') {
                        return path(c[i], name, start + "['" + i + "']", val);

                    }
                }


            } else {
                if (typeof c === 'object') {
                    var keys = Object.keys(c);
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        if (c[key] === val) {
                            var path = start + "[Object.keys(" + start + ")[" + i + "]]"
                            return {'path': path}

                        }
                        if (typeof c[key] === 'object') {
                            var path = start + "[Object.keys(" + start + ")[" + i + "]]"
                            return path(c[key], name, path, val);
                        }
                    }


                } else {
                    return undefined;
                }
            }


        };

        function contains(arr, v) {
            for (var i = 0; i < arr.length; i++) {
                try {
                    if (JSON.stringify(arr[i]) === JSON.stringify(v)) return true;
                } catch (e) {
                    return false;
                }

            }
            return false;

        }

        function unique(arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (!contains(newArr, arr[i])) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;

        }

        function getType(val) {
            return val instanceof Array ? 'array' : typeof val;
        }

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {

            if (f.name === fname || base.name == fname) {

                objectsToTrack.push({'name': 'base', 'value': base})
                for (var i = 0; i < args.length; i++) {
                    objectsToTrack.push({'name': 'argument' + i, 'value': args[i]});

                }

            }


            return {f: f, base: base, args: args, skip: false};
        };


        this.invokeFun = function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
            if (f.name === 'callback' || base.name === 'callback') {
                trackReads = true;
                objectsToTrack.push({'name': 'callbackReturn', 'value': result});


            }
            if (f.name === fname || base.name == fname) {
                trackReads = false;
            }

            return {result: result};
        };


        this.getField = function (iid, base, offset, val, isComputed, isOpAssign, isMethodCall) {

            for (var i = 0; i < objectsToTrack.length; i++) {
                if (reachable(base, objectsToTrack[i]['value'])) {
                    if (typeof offset === 'string' && typeof base !== 'function' && offset !== '') {
                        var pathloc = path(objectsToTrack[i]['value'], offset, objectsToTrack[i]['name'], val);


                        if (pathloc) {
                            objectsToTrack.push({
                                'name': pathloc['path'],
                                'value': val
                            })
                            propertyPaths.push(pathloc)

                        }

                        if (trackReads && pathloc) {
                            pathsAfterCallback.push(pathloc)
                        }
                    }
                }
            }


            return {result: val};
        };

        //read everything declared outside function call and objects reachable from tracked obj
        this.read = function (iid, name, val, isGlobal, isScriptLocal) {


            for (var i = 0; i < objectsToTrack.length; i++) {

                if (reachable(val, objectsToTrack[i]['value']) && typeof val !== 'function' && val !== undefined) {

                    var pathloc = path(objectsToTrack[i]['value'], name, objectsToTrack[i]['name'], val)
                    if (trackReads && pathloc) {
                        pathsAfterCallback.push(pathloc)
                    }
                }
            }


            return {result: val};
        };

        this.write = function (iid, name, val, lhs, isGlobal, isScriptLocal) {
            return {result: val};
        };


        this.endExecution = function () {


            if (fs.existsSync('./generated_' + testFolder + '/pathsAfterCallback.json')) {
                pathsAfterCallback = pathsAfterCallback.concat(JSON.parse(fs.readFileSync('./generated_' + testFolder + '/pathsAfterCallback.json')));
            }

            fs.writeFileSync('./generated_' + testFolder + '/pathsAfterCallback.json', JSON.stringify(unique(pathsAfterCallback)));


        }

    };

    sandbox.analysis = new MyAnalysis();


})(J$);
