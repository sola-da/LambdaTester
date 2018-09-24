





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
return a/b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"618":49,"-100":"","XLrI":"+4","Z(":"b","":3.9337595751185645e+307,"iB":"@","V":1.1047149918025306e+308,"1.0585352962677962e+308":""}
return a/b+c*d
};
var argument3 = {"9":"","403":"","618":"=p0","714":"","1.3597951465194527e+308":8.731957089384325e+306,"y":"Z1F+'","1.3589504615803647e+308":6.376320929197819e+307};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['{S'] = null
argument7[1] = [5e-324,"Y"]
return a/b*c*d
};
var argument6 = [705];
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 1.2884680861543565e+307
return a-b*c/d
};
var base_0 = [-1,122,969,705,969,122,655,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,122,969,705,969,122,655,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,122,969,705,969,122,655,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,122,969,705,969,122,655,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test61.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)