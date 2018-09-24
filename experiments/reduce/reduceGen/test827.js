





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = {"157":"N","618":"","7.736826115226215e+307":157,"9.421911622451463e+307":"","E7":1.3964348571568782e+308}
base_0[4] = "v*"
argument3 = null
return a*b-c-d
};
var argument2 = [-100,705];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[627] = [655,126,-100,714,893,5e-324,607,126,5e-324,25]
argument4[3] = {"#yZh{n":"","":893,"]":"","5e-324":"NC`","wI":969}
argument3[0] = ""
return a*b-c/d
};
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.3938918493123786e+308] = {"49":"","242":"","-100":5.660401502400626e+307,"_":823}
argument6[627][126] = {"213":1.3580632840959168e+308,"595":"4]V","":"j"}
argument6[1.1532786076532189e+308] = true
return a/b/c+d
};
var argument6 = false;
var argument7 = [607,823,893,59,-1,213,714,893,460];
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[90] = ""
return a-b/c-d
};
var base_0 = [705,49,-100,627,1.7976931348623157e+308,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,49,-100,627,1.7976931348623157e+308,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,49,-100,627,1.7976931348623157e+308,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,49,-100,627,1.7976931348623157e+308,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test827.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)