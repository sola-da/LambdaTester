





var callbackArguments = [];
var argument1 = false;
var argument2 = [607,607];
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = {"1.5813093446919895e+308":"","":"","4.087803631342865e+307":893,"st":783,"n":"]","1.5641606118691549e+307":627}
argument3[595] = null
argument3[7.889879335222838e+307] = {"893":5.64296237549603e+307,"":"f","2.236279412169617e+307":6.485730547132954e+307,"1.7976931348623157e+308":"S:","1.2796594392337797e+308":"V","7.174210486085891e+307":-100,"1.0536132311703702e+308":"+","nQ":2.841436368661283e+307,"+rm":783}
return a/b-c+d
};
var argument5 = null;
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[82] = null
argument6[213] = "})N"
return a+b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = {"49":"8no","403":242,"595":"'","":"","-1":"!","&":"","1.5159301769725996e+308":3.8126438984651813e+307,"3.8643581369292014e+307":8.032078622007803e+307,"9.909975368620634e+307":893,"#":">"}
argument10[627][126] = {"595":"kS^","823":1.7777073247246677e+308,"1n":"X","p":""}
return a/b+c*d
};
var argument10 = null;
var argument11 = false;
var argument12 = 5.992660571935223e+307;
var argument13 = r_3;
var argument14 = r_3;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[4] = true
argument14 = null
return a*b+c-d
};
var base_0 = ["=*3","0","*Ni","ppN(Gx"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=*3","0","*Ni","ppN(Gx"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=*3","0","*Ni","ppN(Gx"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=*3","0","*Ni","ppN(Gx"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test647.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)