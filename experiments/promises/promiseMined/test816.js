/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return self.updateSource(checkpoint);
};
var argument2 = p1;
var argument3 = true;
var argument4 = p2;
var argument5 = function (map) {
 callbackArguments.push(arguments) 

    if (scope.onCreated != null) {
        return new LayerParentModel(scope, element, attrs, map, scope.onCreated);
    } else {
        return new LayerParentModel(scope, element, attrs, map);
    }
};
var argument6 = r_1;
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    self._context = parent ? parent.context : TOP_CONTEXT;
    throw error;
};
var argument8 = r_2;
var argument9 = p1;
var argument10 = ["vB-BT",823,"a","r","YE",618];
var argument11 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 11,
                end: 13
            },
            {
                start: 26,
                end: 28
            },
            {
                start: 32,
                end: 34
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument12 = null;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test816.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)