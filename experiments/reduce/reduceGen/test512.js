





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {"705":1.0450221841579297e+307,"969":"","":"{zcO"}
return a+b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = 122
argument6[4] = {"0":"FC5+@"}
return a*b+c-d
};
var argument6 = [242,969,25,655,460,82,618,157,823];
var argument7 = [25,"A",969,122,"n",403,618,"pa","Ss)$3",":="];
var argument8 = null;
var argument9 = [82,705,-100,"+",893,"`O","d=^q",213,"%"];
var argument10 = r_1;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = ["9:x="]
return a-b-c*d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[403] = {"25":607,"100":"","126":1.0752827384559807e+308,"":"","1.129681914258226e+308":49,"b":"8"}
argument13[25] = ""
return a-b/c*d
};
var argument13 = null;
var base_0 = [618,25,122,627,-1,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,25,122,627,-1,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,25,122,627,-1,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,25,122,627,-1,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test512.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)