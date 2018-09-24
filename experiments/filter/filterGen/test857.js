





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][5e-324] = 1.6370282820720585e+308
return a/b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-100] = [100,403]
return a/b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7847438319683965e+308] = 7.137284726326285e+305
argument6[-1] = 2.6551253895884356e+307
argument5[0] = false
return a-b/c
};
var argument6 = {"4":"","59":9.318566796030566e+307,"122":")?e","595":5.181020159738051e+307,"6.657717138028108e+307":2.1214847097329036e+306,"1.2064556682088447e+308":"","":"#sQ","<yL){":100};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = "_"
base_3[8][3] = {"0":"A","403":2.636007108095324e+307,"618":627,"893":"","3.5446862938207553e+307":"q`*Y","":0,"4f":"_","1.7976931348623157e+308":"","V)M":1.7683651654642645e+308,"1.00701667571755e+308":1.724193021864219e+308}
argument9['#R[+'] = 3.714980816392068e+306
return a-b*c
};
var argument8 = null;
var argument9 = false;
var base_0 = ["=Ma","*","3`","J","fe[?"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test857.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)