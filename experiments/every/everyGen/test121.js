





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = true
argument2 = 1.2022124481359662e+308
return a/b+c
};
var argument2 = {"893":1.4934708311493006e+308,"1.4819558762392014e+308":1.3975460493543956e+308,"":"VG","v":"2@("};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
base_1[1] = false
return a-b-c
};
var argument5 = 82;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {"":"n`","L":"LD","1.2706965947076564e+308":"","yXaSI]":"","1.3257830755356962e+308":"l","1.2563348983511832e+308":"","1.3064412294633565e+308":""}
return a/b-c
};
var argument7 = true;
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = {"0":1.295636352918741e+307,"126":"L","607":"-ZI65S","3.7577106625090977e+307":"5x","1.4814716110351425e+308":"","1.7578283603922751e+308":"X","":"","7.26019162839447e+307":"","S":"","5.05249230445801e+307":"9"}
base_3[1] = null
base_3[4] = [969,783,627,618,783,607]
return a+b+c
};
var base_0 = ["w",242,"rJ[",460,403,0]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w",242,"rJ[",460,403,0]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w",242,"rJ[",460,403,0]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["w",242,"rJ[",460,403,0]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test121.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)