





var callbackArguments = [];
var argument1 = 5e-324;
var argument2 = 6.596676726704748e+307;
var argument3 = "]wKtO";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7.889879335222838e+307] = {"460":"A","893":1.1018610489538584e+308,"":783,"-1":"","3.2157800719058166e+307":"g!*","1.3826569468082459e+308":714,"4.464301838934248e+307":""}
base_0 = [-100,460,655,242,-1,-1,460,714,25]
return a+b+c/d
};
var argument5 = 1.7783227524432508e+308;
var argument6 = {"1":";","242":9.905633729664501e+307,"893":"","":"A","5e-324":"'X"};
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = "M"
return a*b+c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = null
argument10[82] = {"49":1.7478378120711271e+308,"59":6.544758930237734e+307,"627":-1,"j":627,"5.49217269291444e+307":-100,"-1":0,"":"","2.0503838997626077e+307":"AT","|WTT":1.39203618581394e+308,"3.4175260605433853e+307":"m "}
argument9[0] = null
return a*b/c/d
};
var argument10 = null;
var argument11 = null;
var argument12 = true;
var argument13 = [893,618];
var argument14 = [1.7976931348623157e+308,100,403,969,893,49];
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14 = ["K","G","R",",","Uz"]
argument13[7] = [";",595,126,-1,":t9bp"]
argument14['*c'] = 5.873544487895291e+307
return a*b+c*d
};
var base_0 = [213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test547.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)