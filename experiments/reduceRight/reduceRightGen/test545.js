





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['L'] = {"213":"","M":"","1.4141314848515823e+308":460,"":1.1932170599131612e+308,"3.0211684973820836e+307":"G"}
argument1[1] = true
argument2[4] = null
return a+b*c-d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2.819898637310108e+307] = [242,213,213]
argument4[100] = ["!","yO]I",242,969,"rR[","Vh%cm","-","z","pfm][G"]
return a+b*c/d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = ""
base_2[4][1.7976931348623157e+308] = null
argument7['8('] = {"618":"","1.4686809774714144e+308":"g","r*":"","MHv|":607,"":4.1508926993894325e+307,"L[":1.313480652588704e+308,"1.4304418483500828e+308":"","A>d":1.4758521457142e+308,"1.4189493258114735e+308":82,"k":""}
return a+b*c+d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {"122":1.3323850508881667e+308,"655":49,"5e-324":"",";":1.4281913679048546e+308,"":8.167183558569233e+307,"3.4379142715015885e+307":126,"]":"","1.589775868440601e+308":595,"9.216219741698471e+307":126,"1.7976931348623157e+308":213}
base_3[0] = [893,49,122,25,-1,82,122]
return a*b/c+d
};
var base_0 = ["]"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test545.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)