





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ""
base_0 = 1.7947801002128515e+308
argument3[1] = 5.206210150495985e+307
return a+b/c
};
var argument2 = "4Q?";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"8.577986059657043e+307":"","F1":2.460852935942085e+307,"1i":403,"1.6847829155480419e+308":1.186713128333116e+308}
return a-b*c
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"126":"","1.0093245514281453e+306":"tAxt"}
return a+b/c
};
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[9] = null
return a*b/c
};
var argument11 = null;
var argument12 = "";
var base_0 = [100,0,59,122,242,122,618]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,0,59,122,242,122,618]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,0,59,122,242,122,618]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,0,59,122,242,122,618]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someGen/test222.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)