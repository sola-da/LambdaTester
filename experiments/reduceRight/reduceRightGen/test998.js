





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = [49,49,-1,1.7976931348623157e+308,242,460,607,969,714]
argument2[2] = "C&"
argument2[2] = ""
return a*b/c+d
};
var argument2 = [843,"9","D",49,25,1.7976931348623157e+308,"R",893];
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['T'] = "B"
base_1[6] = null
base_1[6] = 9.845417399693916e+307
return a*b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.5887552427096746e+308] = ""
return a*b*c/d
};
var argument6 = r_2;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[783] = null
return a-b-c/d
};
var argument9 = r_2;
var argument10 = null;
var base_0 = [783,242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test998.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)