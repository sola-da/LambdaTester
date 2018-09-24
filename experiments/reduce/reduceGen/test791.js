





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = "78pX"
base_0[0][4] = false
return a-b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"627":"","714":1.2978451279858456e+308,"969":100,"":"S+","7.79176402879804e+307":"","cC=:&M":59,"mfAq":49}
argument2[9] = {"122":1.3365527947980934e+308,"157":607,"1.083619356654681e+308":1.6831805939311406e+308,"(":655,"-1":"c|","1.1329045931687976e+308":1.4578143397123987e+308,"6.335911326673055e+307":""}
return a+b-c/d
};
var argument3 = true;
var argument4 = true;
var argument5 = 59;
var argument6 = null;
var argument7 = ["@","Y","b+","Ae","GhG","[A[Y]|","t"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = true
argument6[82] = [213,-1,714]
return a-b-c*d
};
var argument9 = r_2;
var argument10 = null;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = ""
argument11[627] = [595,"eP94]","^`tv"]
return a/b/c+d
};
var base_0 = [100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test791.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)