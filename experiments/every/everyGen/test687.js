





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = null
argument2[4] = false
return a-b-c
};
var argument2 = {"":714,"g":"","S":9.859714342266016e+307,"-1":"9","x":"","4.988780277357191e+306":"^>H3","1.0370637471636989e+308":",E"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[122] = [627,49,1.7976931348623157e+308,157,126,618,-1,893,705,714]
argument4[1.3599216339661573e+308] = 783
base_1[0][0] = [595,59,893,59,783,843,100,157]
return a+b*c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2.4183178393969103e+306] = "#"
base_2[3] = [595,126,595,618,655,655,595,823,1.7976931348623157e+308]
argument7[6] = false
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][6] = false
base_3[4] = true
return a-b+c
};
var base_0 = ["q",122,49,"(","]d",823,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q",122,49,"(","]d",823,82]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q",122,49,"(","]d",823,82]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q",122,49,"(","]d",823,82]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test687.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)