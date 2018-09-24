





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 783
argument3[3] = 705
argument1[4] = ["Z","fBy"]
return a+b-c+d
};
var argument2 = true;
var argument3 = "";
var argument4 = 843;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9] = {"893":"s4","P":"","^":7.017457319586388e+306,"1.300332560362913e+308":1.7760070946622785e+305,"M":1.4150423657023313e+308,"":"","3.745984832653487e+307":1.3071713990406172e+308}
return a+b*c*d
};
var argument6 = true;
var argument7 = null;
var argument8 = 1.4433697831774212e+308;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 82
argument7[0] = {"213":"","823":213,"-1":"","`&":122,"":1.5122263889304876e+308,"9.295878830366037e+307":"",":":"H5","ua":"MN&","1.0931082351761487e+308":""}
argument6[8] = null
return a+b-c/d
};
var argument10 = r_3;
var argument11 = true;
var argument12 = true;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = ""
return a*b+c-d
};
var base_0 = ["K@","D@E","pg","m;","=","U","[@WD","H",",B","0"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K@","D@E","pg","m;","=","U","[@WD","H",",B","0"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K@","D@E","pg","m;","=","U","[@WD","H",",B","0"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K@","D@E","pg","m;","=","U","[@WD","H",",B","0"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test340.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)