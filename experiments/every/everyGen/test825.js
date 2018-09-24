





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = [607,122,213,126]
argument3[2] = {"0":"","49":"","4.3161589267332656e+307":"","?":0,"":3.823155835853277e+307,"9.897826818469736e+307":0,"8.901245462382447e+307":"<"}
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = ["pfdO","w|","ym","cc&b"," ;","6si;c"]
argument3[6.148642213884202e+307] = {"Y:":8.729053078477044e+307,"7==u8Y":""}
argument3[783] = null
return a*b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = ["f","U","Vz","v","s&","E","K","R","j^R"]
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 4.56211468597259e+307
argument5[4.960033715165713e+307] = null
return a-b+c
};
var argument5 = "x";
var base_0 = [618,460,403,618,59,-1,969,82,627]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,460,403,618,59,-1,969,82,627]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,460,403,618,59,-1,969,82,627]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,460,403,618,59,-1,969,82,627]
var r_3= undefined
try {
r_3 = base_3.every(argument4,argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test825.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)