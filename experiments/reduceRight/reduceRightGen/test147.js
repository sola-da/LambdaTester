





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 5.077123238225475e+307
base_0[6][2] = {"1.214529099988877e+308":"","4.841712506216981e+307":"","M":">>","":"6E"}
return a+b-c*d
};
var argument2 = true;
var argument3 = [">","<","80)Q|","K","Q","?","}@"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = 460
return a+b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['8('] = {"1.1756931231874504e+308":"","1.7865808734889036e+308":"","5`dIh$GGfKP":"","1.2216359577279031e+308":"","":1.2340687867778804e+308,"7.350834268796721e+307":"","2.407688456919495e+307":7.811234408455741e+307,"Je":"6"}
base_2[3] = ["b","|",213,893,627,460,59,"i"]
argument6 = true
return a-b/c-d
};
var argument6 = true;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = "6D!"
argument9[0] = null
argument9[8.575765443877852e+307] = ""
return a*b-c-d
};
var argument9 = r_0;
var argument10 = {"0":242,"126":403,"213":"","A6":893,"":-100,"1.1652896474493493e+308":""};
var base_0 = ["`","VGDg","o","Jvy","Ls","c]A"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`","VGDg","o","Jvy","Ls","c]A"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`","VGDg","o","Jvy","Ls","c]A"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`","VGDg","o","Jvy","Ls","c]A"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test147.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)