





var callbackArguments = [];
var argument1 = function (plat) {
 callbackArguments.push(arguments) 

    kw.browser_min[plat.browser] = plat.version;
};
var argument2 = {"7.073305320189049e+307":"","":"","Bt":"","4.712146541256184e+307":"ah","4.960918702053864e+307":"52","6.376828791624742e+307":"h"};
var argument3 = false;
var argument4 = function (range) {
 callbackArguments.push(arguments) 

    session.removeMarker(range.markerId);
    range.markerId = null;
};
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    exported[e] = true;
};
var argument6 = false;
var argument7 = null;
var argument8 = function (pollFn) {
 callbackArguments.push(arguments) 

    pollFn();
};
var base_0 = [627,213,-100,618,49,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,213,-100,618,49,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,213,-100,618,49,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,213,-100,618,49,705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)