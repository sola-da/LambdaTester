





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument2 = null;
var argument3 = true;
var argument4 = function (idef) {
 callbackArguments.push(arguments) 

    return findMissingTest(idef);
};
var argument5 = function (i, el) {
 callbackArguments.push(arguments) 

    if (el === input[0]) {
        return inputClone[0];
    }
    return el;
};
var argument6 = [1.7976931348623157e+308,"v",0,823,607,783,59,"X","s6","6Nt"];
var argument7 = function (v) {
 callbackArguments.push(arguments) 

    return Math.atan2(v[0] - cx, v[1] - cy);
};
var base_0 = [82,969,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,969,0]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,969,0]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test868.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)