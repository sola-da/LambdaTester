





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
argument2['w'] = 0
argument2[4] = ["%,"," ","`_m#","0"]
return a/b-c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ["#","-","<","J",122,705,"c","`","Q="]
argument3 = true
base_1[8] = false
return a*b/c*d
};
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[126] = {"0":100,"595":607,"969":"","1.4748858944074597e+308":49,"t>":783,"1.5904011878877677e+308":":","1.7485161608100604e+308":1.0905873973647146e+308,"R":460,"":""}
argument6[1.738403780925446e+308] = ""
argument7['!j'] = [783,823,823,242,618,-1,460,100,618]
return a-b+c-d
};
var argument6 = null;
var argument7 = ":";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = false
argument10[4] = {"595":595,"":823}
base_3[6] = 1.4845256607434064e+308
return a*b+c-d
};
var argument9 = null;
var base_0 = [-1,25,242,"g",-100,"0nyD<!","-V",122]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,25,242,"g",-100,"0nyD<!","-V",122]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,25,242,"g",-100,"0nyD<!","-V",122]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,25,242,"g",-100,"0nyD<!","-V",122]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test259.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)