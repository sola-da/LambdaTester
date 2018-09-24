





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    (function (file) {
        fs.readFile(path.join(buildXBase, 'yql', file), stack.add(function (err, data) {
            var shasum = crypto.createHash('sha1');
            shasum.update(data);
            var d = shasum.digest('hex');
            results.pre[file] = d;
        }));
    }(file));
};
var argument2 = null;
var argument3 = function (field) {
 callbackArguments.push(arguments) 

    if (field.isFile === true) {
        multipartDetected = true;
        return false;
    }
};
var argument4 = function (handler) {
 callbackArguments.push(arguments) 

    if (event.path.substr(0, pl) === path) {
        var ev = {};
        for (var key in event) {
            ev[key] = event[key];
        }
        ev.relativePath = event.path.replace(new RegExp('^' + path), '');
        try {
            handler(ev);
        } catch (e) {
            console.error('\'change\' handler failed: ', e, e.stack);
            self._emit('error', e);
        }
    }
};
var argument5 = false;
var argument6 = 213;
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    if (xs[t.id]) {
        updateTargetX([t], xs[t.id]);
    }
};
var base_0 = [157,893,655,49,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,893,655,49,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,893,655,49,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,893,655,49,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test170.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)