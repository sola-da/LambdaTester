





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = false
base_0['length'] = ""
base_0['length'] = null
return a/b*c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4.224481734419934e+307] = null
base_1[6] = null
argument5[3.0481490052276395e+306] = {"aw":"{","q":25,"1.4521278080188225e+308":"_'wA","8.666696375898102e+307":705,"8.988199200602447e+307":6.345778397287683e+307,"-":1.2897233726693175e+308}
return a+b*c
};
var argument5 = [705,893,25,460,655];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = 403
argument7[3.0481490052276395e+306] = {"100":"5","F":""}
argument7[5] = null
return a-b+c
};
var argument7 = ["Z",",HL","[Je7t","y]","u","t-","x-","Xk8Tb6","PsR<&p"];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 25
argument10[5] = true
argument10[3] = {"82":"","126":"","823":1.0473399729857955e+308,"Y-":"B","1.6936270352334633e+308":"","1.769794030280925e+307":5.859874295044503e+306,"5.355718623046913e+307":"v"}
return a/b+c
};
var argument9 = [157,607,"{$bo",122,843];
var argument10 = 25;
var base_0 = ["@",460,"Tv"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@",460,"Tv"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@",460,"Tv"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@",460,"Tv"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test401.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)