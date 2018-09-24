





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['K'] = {"122":655,"9.674640083203658e+307":25,"G":3.003012940843724e+307,"8.656427785339331e+307":"","1.0568436045445176e+307":"x","S":100}
argument3[0] = [893,82,618,100]
return a+b*c-d
};
var argument2 = [823,0,82,403,655,893,1.7976931348623157e+308];
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"126":"","705":122,"9.268460555713677e+307":1.0057983540970332e+308,"":"","v[z":0,"1.3657620703247472e+308":1.1507615407994848e+308,"I":"O","UZE":"_","1.3952186269769712e+308":1.6982669307746574e+308}
return a*b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = ""
return a*b-c*d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['T'] = true
base_3[2][2] = [403,"U","_",59,618,607,5e-324,"3:i",783]
argument9[4] = {"5.953013880749704e+307":783,"m":1.3490136948940264e+308,"1.7869479751714498e+308":714,"1.003985457254672e+308":59,"=N":"&","_":",","GI(p":"+","":""}
return a-b-c+d
};
var argument8 = r_2;
var base_0 = [-100,0,655,157,122,126,655,59,783,213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,0,655,157,122,126,655,59,783,213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,0,655,157,122,126,655,59,783,213]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,0,655,157,122,126,655,59,783,213]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test255.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)