





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = null
argument2[1.1207829086460726e+308] = true
return a*b+c-d
};
var argument2 = "1";
var argument3 = {"126":1.3527185474587023e+308,"783":100,"":5.13252659980399e+307,"6.217022938630868e+307":1.1903922856659861e+308,"C;Zrp":6.282569503636955e+307,"$o@":157,"1.1838846715913196e+308":49,"1.7585945816598359e+308":1.6037871967761225e+308,"-100":1.6203141258544653e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = [25,49,627,460]
argument6[-1] = {"705":25,"783":59,"{F'!w":82,"?":9.732183747323235e+307,"]F":607,"":100,"r":"C","d":"G&FK"}
argument5[1.4250811791542279e+308] = null
return a-b*c*d
};
var argument5 = ["a","[sZv","0","6w","d","$T","{U"];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = ""
return a/b+c-d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['w'] = true
argument8['F2nCX>6'] = 100
argument8['L'] = false
return a+b+c+d
};
var argument8 = 3.349470628733138e+307;
var base_0 = ["!)?3",")Z[",969,"{","8[82",893,893,122]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!)?3",")Z[",969,"{","8[82",893,893,122]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!)?3",")Z[",969,"{","8[82",893,893,122]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!)?3",")Z[",969,"{","8[82",893,893,122]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test734.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)