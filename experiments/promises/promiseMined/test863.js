/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    if (!resources.components[result.stage.component.name])
        return data;
    return resources.components[result.stage.component.name].content.save(data, result.content, result.stage, result.project, result.cycle);
};
var argument2 = 3.344462607668472e+307;
var argument3 = true;
var argument4 = r_1;
var argument5 = function () {
 callbackArguments.push(arguments) 

    resetMatches();
    isLoadingSetter(originalScope, false);
};
var argument6 = p2;
var argument7 = r_1;
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [{
                start: 44,
                end: 49
            }]);
    } finally {
        tearDown();
    }
};
var argument9 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument10 = {};
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
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test863.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)