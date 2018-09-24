





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7976931348623157e+308] = 403
argument3[2] = {"705":126,"Wo":1.4866488612864695e+308,"":4.77253947322736e+307}
argument2[1] = ["T","-o","6","G$","z7","t","Dd","q","a"]
return a*b+c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-1] = ""
base_1[0][595] = null
return a/b*c
};
var argument5 = false;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][6] = "Q"
return a+b+c
};
var argument8 = null;
var argument9 = 1.1698867452147498e+308;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = {"8":"En","618":5.510037408115299e+307,"p":"0tu","":4.4610977067049145e+307,"3.7174814298099856e+307":893,"6.133378363659573e+307":"C1","1.198177549291448e+307":"d"}
argument12[4] = ":"
return a*b-c
};
var argument11 = true;
var base_0 = ["N44","$","@[WL","Am","aDe,0V","#*m","H","1"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N44","$","@[WL","Am","aDe,0V","#*m","H","1"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N44","$","@[WL","Am","aDe,0V","#*m","H","1"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N44","$","@[WL","Am","aDe,0V","#*m","H","1"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test945.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)