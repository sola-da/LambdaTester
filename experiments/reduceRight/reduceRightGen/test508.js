





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 1.884702423180056e+307
argument2[7] = ["6","=2]BO","6wFFdoqKv","n","R","w","L2"]
argument2[705] = [823,893,49,783,705]
return a-b/c+d
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"783":7.60290306669858e+307,"823":"L","6.691653957807202e+307":"","1.2880738951981635e+308":"","[I":"","7.061621472814037e+307":"","2.4403667801340044e+307":59,"":"][","3.562146923959553e+307":"","1.6204649761450865e+308":100}
argument6[-1] = {"213":1.7719145372722744e+308}
return a+b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][2] = "K"
argument7['UU'] = null
return a-b+c-d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = 1.7809052589481309e+308
return a/b*c/d
};
var argument8 = null;
var argument9 = null;
var base_0 = [460,82,242,460,100,-1,655,607,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,82,242,460,100,-1,655,607,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,82,242,460,100,-1,655,607,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,82,242,460,100,-1,655,607,126]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test508.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)