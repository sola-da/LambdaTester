





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = {"618":1.7117188987694375e+308,"969":"","1.7976931348623157e+308":5e-324,"1.053855105388298e+308":"","1.5167051325777889e+308":"f|M","":595,"8.065399981037388e+307":""}
argument3['8('] = 6.624811807481696e+306
return a/b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = [969,59,-1,893,893,618,5e-324,655]
argument4['8('] = null
base_1[6][2] = null
return a/b+c/d
};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['8('] = 100
base_2['length'] = ""
base_2[1] = true
return a-b/c+d
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"157":"{xE'UH2eIi","783":1.059191606247794e+308,"7.920902722959315e+307":"O"}
argument9[3] = false
base_3[4] = 783
return a/b+c+d
};
var argument8 = [403,607,460,1.7976931348623157e+308,-1,714,403];
var argument9 = "q";
var base_0 = [607,25,823,213,-100,714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,25,823,213,-100,714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,25,823,213,-100,714]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,25,823,213,-100,714]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test177.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)