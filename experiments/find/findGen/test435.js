





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"82":595,"122":"+","Pn":7.332281769266508e+307}
argument3[969] = 3.557080134249562e+307
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = "K"
argument3[0] = ""
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = ["e","#=Yo","e ","4h"]
base_2[0][1] = {"460":49,"705":1.4023345894785923e+308,"8.829052205508576e+307":"","1.6118919912636611e+308":1.3001893428552316e+308,"3.5782968535084766e+307":"","":"","}":"","6!_":1.0993135770001866e+307}
argument5[5] = -100
return a*b-c
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = [25,25,-100,126,82,0,1.7976931348623157e+308]
argument8[3] = true
argument8[3] = null
return a*b/c
};
var argument7 = "h";
var argument8 = "";
var base_0 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test435.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)