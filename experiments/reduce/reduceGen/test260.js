





var callbackArguments = [];
var argument1 = [25,403,"y",242];
var argument2 = {"893":"","7.346125426217446e+306":"","":"`","5.792529605949434e+307":969,";N":49};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {"":242,"4.243087792757749e+307":""}
return a/b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 9.270858738368776e+307
argument6[2] = {"59":"","157":"[UM","783":"e","9.391683960128523e+307":595,"":"q","1.0100049429616799e+308":-100,"gf":627}
return a+b+c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = null
argument7[4] = {"10":2.410033487891629e+307,"126":"","2.2955253337691394e+307":"&7f7","${":1.2679698121741966e+308,"1.7455438250106593e+308":"RL","":""}
return a+b-c+d
};
var argument7 = 6.906261878790363e+307;
var argument8 = {"":5e-324,"-":1.2550171878818994e+308,"7.391703158663504e+307":242};
var argument9 = null;
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2.1869172855352885e+307] = "M"
base_3['length'] = {"59":"r","1.928714416820489e+307":2.295362145602913e+307,"":"","lm$e":"","T|":893,"1.10993655449977e+308":1.7976931348623157e+308,"1.6183444314988099e+308":-1,"wu":"B'5","-100":"^>"}
base_3[6] = {"893":"ew","":-100,"1.229048286672425e+308":1.5653467003051798e+308,"V#":""}
return a-b+c/d
};
var base_0 = [655,49,893,5e-324,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,49,893,5e-324,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,49,893,5e-324,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,49,893,5e-324,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test260.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)