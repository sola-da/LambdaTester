





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[';N'] = false
return a/b*c*d
};
var argument2 = false;
var argument3 = null;
var argument4 = "`";
var argument5 = ["deo7O","-I3","c","PD7;!","MuXt","@u{sJ,cA"];
var argument6 = "";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['Cb'] = ""
argument6[7] = "B]U"
return a*b+c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = [",|","Q;","&`","5X1Rf"]
base_2[3][1] = {"460":"","607":1.5643231154107642e+308,"783":"i","1.089707399579899e+308":"",")":1.0605125271520859e+307,"":""}
argument9[0] = ""
return a*b-c-d
};
var argument9 = null;
var argument10 = {"82":"pEjD","100":"M","1.426246565199626e+308":"","":9.905856595552933e+307,"1.716991244953545e+307":157,"8.453363771772193e+307":"1","1.7480515199055027e+308":595,"b34Tl":","};
var argument11 = false;
var argument12 = false;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1.612812046173122e+308] = [0,627,-100,705,893,969]
argument12[1.359136872727139e+308] = ""
argument10[4] = 4.3002320843628816e+307
return a/b+c*d
};
var base_0 = ["z","?","?1Nk;","+","i","f"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z","?","?1Nk;","+","i","f"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z","?","?1Nk;","+","i","f"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z","?","?1Nk;","+","i","f"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test978.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)