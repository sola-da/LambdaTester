





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[';N'] = ["O","r"," "]
argument2[627] = false
return a+b*c/d
};
var argument2 = {"6":"4l","5.10893324226309e+307":8.808052115837726e+306,"mg":"2","p":460};
var argument3 = false;
var argument4 = true;
var argument5 = "x";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = null
return a*b/c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = [-100,49,823,157,705,893,969,969,157]
argument8[7.463432409233234e+307] = ""
argument7[893] = [-1,893,-100,783]
return a*b*c-d
};
var argument8 = false;
var argument9 = r_3;
var argument10 = false;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = true
return a*b-c*d
};
var base_0 = ["]Ux|","(",823,"`LX#*bG#c","jW","t",122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]Ux|","(",823,"`LX#*bG#c","jW","t",122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]Ux|","(",823,"`LX#*bG#c","jW","t",122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]Ux|","(",823,"`LX#*bG#c","jW","t",122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test669.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)