/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"403":7.340118266872382e+307,"":100,"MxT":"","1.4745349217235082e+308":",","3.836527628628056e+307":"|>7wS","3.31876968124663e+307":"Q","r":607,"4.821025684199273e+307":1.4671973240191204e+308,"^J2":"","1.7193956602213097e+308":""};
var argument2 = function (result) {
 callbackArguments.push(arguments) 

    return result.length == 0;
};
var argument3 = true;
var argument4 = function (map) {
 callbackArguments.push(arguments) 

    if (!_this.gMarkerManager) {
        _this.gMarkerManager = new MarkerManager(map);
    }
    new MarkerParentModel(scope, element, attrs, map, _this.$timeout, _this.gMarkerManager, doFit);
    scope.deferred.resolve();
    if (scope.control != null) {
        return scope.control.getGMarkers = _this.gMarkerManager.getGMarkers;
    }
};
var argument5 = null;
var argument6 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 27,
                end: 28
            },
            {
                start: 49,
                end: 50
            }
        ]);
    } finally {
        tearDown();
    }
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument7)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test770.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)