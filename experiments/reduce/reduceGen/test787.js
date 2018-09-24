





var callbackArguments = [];
var argument1 = {"460":1.7613538601012676e+308,"618":"$o<x'z","":"K","1.0125911588699396e+308":8.502553138608538e+307,"1.641162650894447e+308":-1,"3.0533980195847786e+307":49,"9.62412304125094e+307":9.820456256582637e+307,"1.5406775954684433e+308":"",":":25};
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = false
argument1[0] = null
return a+b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.3938918493123786e+308] = ["gk","(","R","1","s]Vhx"]
return a+b*c+d
};
var argument6 = [59,969,460];
var argument7 = true;
var argument8 = true;
var argument9 = r_1;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = 1.3623272623270433e+308
base_2[1][0] = {"618":893,"2.8471040033388375e+307":1.4357695001352108e+308,"8.204115228029371e+307":1.7976931348623157e+308,"k":823,"x8?":"X","1.6281281358375609e+308":6.132671217973231e+307,"R":7.021483135090035e+307}
return a+b/c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[90] = {"0":"]`","893":"","969":5.689772081650998e+307,"K#n":7.598879914331638e+307,"5.6152530936386985e+306":"","F":"uu","Cl":"{Vfuh2","":"+"}
argument13[9.331954948603684e+307] = 1.395057871914986e+308
return a/b+c+d
};
var argument13 = true;
var base_0 = [655,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test787.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)