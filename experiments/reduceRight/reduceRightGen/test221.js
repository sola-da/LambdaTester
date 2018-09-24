





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = "m+"
return a*b-c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"843":"p-","?C&Z:":"9,","":3.660846469487191e+307,"#":"MXi","Q":""}
return a/b+c+d
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = 4.568615225160996e+307
argument7['{S'] = {"":"?t","9.253556439327164e+306":"1x","NuXs":1.2852529723805484e+308}
return a+b*c-d
};
var argument7 = [893,"O^*9","8HV",157,"a",100,25];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = {"82":7.473737151495565e+307,"1.1110208862283713e+308":7.91404180687964e+305,"":")0","1.5720410617623581e+308":""}
base_3[2][2] = {"607":" F","714":0,"1.7976931348623157e+308":49,"1.231978295606351e+308":-1,"1.2148333882632152e+308":1.2756361078288924e+308,"%":"","":403}
argument10[6] = ["{","aU"]
return a+b-c+d
};
var argument9 = null;
var argument10 = false;
var base_0 = ["$","n","mK","@Cm","i","t"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","n","mK","@Cm","i","t"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","n","mK","@Cm","i","t"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","n","mK","@Cm","i","t"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test221.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)