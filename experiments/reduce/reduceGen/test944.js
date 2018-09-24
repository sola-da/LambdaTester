





var callbackArguments = [];
var argument1 = {"893":460,"5.527606400634097e+307":"mWW","1.698194822916751e+308":5.884988469928683e+307,"1.7012630567742545e+308":1.128293643380665e+308,"[":242};
var argument2 = ["T",893,"<",893,823,49,"C"];
var argument3 = 1.2995601548881377e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"B+v_":1.2589985910035197e+308}
argument2[1.1532786076532189e+308] = {"627":2.6582713003975674e+307,"":2.5930805209285296e+307,"{":""}
argument3['(R'] = ""
return a*b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['HMm'] = [157,843,595,705,242,403]
return a*b+c/d
};
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = [460,1.7976931348623157e+308,"8e:"]
argument9[1.1532786076532189e+308] = true
return a+b-c-d
};
var argument9 = "H";
var argument10 = true;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[100] = ""
return a*b/c*d
};
var base_0 = ["=n","KNt",0,25,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=n","KNt",0,25,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=n","KNt",0,25,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=n","KNt",0,25,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test944.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)