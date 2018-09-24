





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = ""
argument1[1] = false
base_0[7] = {"607":1.2203926244933892e+308,"783":1.6560698132124814e+308,"":2.0991240916739657e+307,"-1":7.00920347979095e+307,"7.049913393054718e+307":"hO5","1.594311972321045e+308":"tHel<z","1.7831165423336653e+308":6.330195833836314e+307,"j":6.081905990409163e+307,"9.021589407718237e+307":0,"8.581276127934879e+306":"Y;E"}
return a*b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = 705
argument4['8('] = ""
return a+b+c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['!j'] = 7.312665785662104e+307
return a-b*c/d
};
var argument4 = null;
var argument5 = {"2":705,"":"","+M":1.5827800558100664e+308,"9.746021791196116e+307":"","1.218966115578387e+308":"Dln","1.7086073681817144e+308":"_X","1.3173882812632415e+308":7.688028980848823e+307,"1.112755669391787e+307":705};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = [893,705,783,655,25,607]
return a/b+c+d
};
var argument7 = [-1,"H+e","O=H",843,705,49,714,618];
var argument8 = true;
var base_0 = ["+z","ZK"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+z","ZK"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+z","ZK"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+z","ZK"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test208.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)