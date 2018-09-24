





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = null
return a/b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = [242,"A2",1.7976931348623157e+308,"Lo","+","O"]
base_1[6][4] = "j%"
base_1[8] = 403
return a/b/c
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"627":49,"5e-324":843}
base_2[6][4] = {}
base_2[4] = {"8":714,"59":1.4611289304110669e+308,"1.7976931348623157e+308":7.04832841839567e+307,"":"","&":1.5895191334035674e+308,"3.45835414288659e+307":"","+":705,"4.505488324288652e+307":"","7.832944857437824e+307":403}
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"100":3.2862114302425753e+307,"403":4.136959834180025e+306,"595":1.14458226091403e+308,"":"","5e-324":843}
base_3[0] = {"618":595,"783":"","saIK":"^","?":122,"":"","-1":"WSAHA#pfG","1.2507664354987203e+308":"el","T":5.029314734178809e+307,"1.3233427154684192e+307":1.6186873313747958e+308,"G":";Mh"}
base_3[4] = {"59":"","213":" ","":1.4160554814290556e+308,"7.226330244244626e+307":460}
return a/b*c
};
var base_0 = [157,618,969]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,618,969]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,618,969]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,618,969]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test73.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)