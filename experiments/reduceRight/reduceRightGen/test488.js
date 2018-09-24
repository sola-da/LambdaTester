





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.8120440085202614e+307] = {"-QZ":1.7229804923329513e+307,"9.49482231658623e+307":"W&","":"","9.143616516782514e+307":"{"}
return a/b/c-d
};
var argument2 = [893,126,595,460,5e-324,-100,5e-324,0,1.7976931348623157e+308];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4250811791542279e+308] = false
return a/b/c/d
};
var argument4 = 0;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[126] = ["K^","p","inlWsB","Q","?","i","gMCkS","m"]
return a/b+c/d
};
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['{S'] = ["v_*K","=","oB>","X","z","a","=","|U>"]
base_3[6] = null
argument9['L'] = 7.049494406049328e+307
return a/b-c-d
};
var base_0 = ["g","B"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g","B"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g","B"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g","B"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test488.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)