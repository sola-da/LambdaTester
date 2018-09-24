





var callbackArguments = [];
var argument1 = function (error) {
 callbackArguments.push(arguments) 

    return error.message === 'invalid.git.version';
};
var argument2 = function (id) {
 callbackArguments.push(arguments) 

    return id === fieldLabelId;
};
var argument3 = {"627":157,"705":1.5353607029470389e+307,"893":460,"7.376860728058408e+307":"|2H","":"8","1.2550724163441896e+308":1.7976931348623157e+308,"-1":1.4849901113530571e+308,"4.395867260275494e+307":8.746279461342109e+307};
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument5 = null;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'another';
};
var argument7 = null;
var argument8 = "5";
var base_0 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test940.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)