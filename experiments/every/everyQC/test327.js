





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 64.62021523324178; };
var argument2 = null;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -54.12158033645213; };
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {"h\u001b\u0010Âå\u000e\u0001\u0014\u000e\n":"","£Í\u0013´Iá":true,"øàrÏ±\u0002¨":true,".\u0006_Ó":false,"$":true,"Ú\u001d\u0004(K\u000f\\O":false,"PÞªX¸\f":-30,"#\t9Ó":-31.59850062799728,"µ¬\u0013q":false,"B":true}; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [null,true,0,null,false,true,true]; };
var argument9 = ";8";
var base_0 = [823,"E<!G"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"E<!G"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"E<!G"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"E<!G"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyQC/test327.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)