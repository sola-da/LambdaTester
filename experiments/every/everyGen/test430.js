





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = 1.3929634367389622e+308
return a+b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ""
base_1[2][7] = {"59":"","655":1.0818764446668689e+308,"705":"K9","$`if:*":5.919169425984781e+307,"5.161552945539336e+307":"","C":2.3306132123697307e+307,"":""}
argument6[3] = null
return a-b/c
};
var argument5 = {"0":893,"823":"b","":595,"io":"","*":"l","I7l`":"Q|","2.892563297668263e+307":""};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = {"":"","1.3737798833791212e+308":"","PG5":157,"Ug=<Y":2.0663400047922938e+307,"(V":""}
base_2[1][6] = {"25":3.024391710992694e+306,"823":3.6369288211151505e+307,"":"Q","3.923581699300517e+307":"","9.962450969920737e+307":9.559299470061702e+307,"{":"YtV"}
argument8 = ""
return a/b+c
};
var argument8 = [49,893,82,655,893,893,655];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 213
base_3[3] = ""
return a/b+c
};
var argument10 = null;
var base_0 = [843,0,49,100,705,213,100,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,0,49,100,705,213,100,969]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,0,49,100,705,213,100,969]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,0,49,100,705,213,100,969]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test430.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)