





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = ")*"
return a*b+c/d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = ["Q",")^9j","+x3","V","+lRe","#<","j","rfr","_4"]
argument4[3.8120440085202614e+307] = 1.131795280444173e+307
argument4[3.8120440085202614e+307] = true
return a/b-c/d
};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['!j'] = ["m","cc&b"," ;","6si;c","{2Y:","#7==u8Y","uIm","]7","F"]
return a/b-c/d
};
var argument6 = 1.1955209419566504e+308;
var argument7 = {"1.507647015644539e+308":"","6.641002861512657e+307":705};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = [460,157,705,893,-100,893,783,714,618]
return a*b+c/d
};
var argument9 = true;
var argument10 = "";
var base_0 = [82,"%>_F",59,607,1.7976931348623157e+308,-100,"u",607,";d",783]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,"%>_F",59,607,1.7976931348623157e+308,-100,"u",607,";d",783]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,"%>_F",59,607,1.7976931348623157e+308,-100,"u",607,";d",783]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,"%>_F",59,607,1.7976931348623157e+308,-100,"u",607,";d",783]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test809.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)