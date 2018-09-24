





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.575765443877852e+307] = 705
return a+b/c+d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = [126,843,714,655,618,714,59,460,823]
argument4[1] = 1.7258134232361025e+308
return a*b+c+d
};
var argument5 = {"5.280821901947416e+307":1.4046734604836942e+308};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = false
argument7[627] = "X"
argument8['!j'] = null
return a*b/c/d
};
var argument7 = null;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.4250811791542279e+308] = {"59":"","618":1.3120640688640172e+308,"627":"6","823":1.0008756893789116e+307,"1.783995577241105e+308":"=I]|","g^":1.4282480535704505e+308,"-100":"XO8TL","":1.7976931348623157e+308,"1.6818894610443592e+308":1.0685498396159385e+308}
argument11['UU'] = true
argument10['^N'] = [122,59,618,1.7976931348623157e+308,82]
return a+b/c-d
};
var base_0 = [-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test586.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)