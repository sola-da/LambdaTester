





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = 4.428724652845394e+307
argument3[90] = 595
base_0[1][0] = {"0":893,"82":1.6636124061669412e+308,"705":1.7149728674698151e+308,"G":"69y","":"",";":242,"K":"Lz)A"}
return a/b/c-d
};
var argument5 = {"823":1.0147812484443636e+307,"1.4388680220768613e+308":"Im","":157,"1.7122244422834152e+308":1.686037013002218e+306,"1.3983463902322075e+308":1.4367102067455845e+308,"t":122,">u":-1,"ur":"T","2.0903311703701102e+307":655};
var argument6 = [627,5e-324,0,1.7976931348623157e+308,"UK[*","hf2u","@)"];
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = {"":893,"b":"8","1.4300526631587716e+308":"aN","1'":"r"}
argument6[5] = ""
return a+b*c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = ""
argument10[82] = {"100":"","157":"","595":"","823":"","893":"","a":"","!e":1.206926013791214e+308,":":"","":9.20252947033997e+307}
base_2[6] = 1.655673267736036e+308
return a/b-c/d
};
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2] = "2k-"
argument13['HMm'] = ["^:",595,"hP",82,59,"Z8K","n","]ca5e",-100,82]
return a-b/c-d
};
var argument12 = true;
var base_0 = ["}2ma,x","fPrp","Q"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}2ma,x","fPrp","Q"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}2ma,x","fPrp","Q"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}2ma,x","fPrp","Q"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test380.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)