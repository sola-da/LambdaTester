





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['^h'] = [618,460,242]
base_0[0][2] = 8.653549305563999e+307
argument3[460] = "{"
return a+b/c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = 1.1774296121925626e+307
argument5[25] = 1.7895093322457139e+308
argument5[2] = {"595":"PO","969":"","-":"","1.4520367453559065e+308":"","8,":6.228765068040712e+307,"-1":157}
return a/b*c
};
var argument5 = null;
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8][0] = [714,"|"]
argument9[969] = 9.673101545379725e+307
argument9['^h'] = false
return a+b/c
};
var argument8 = null;
var argument9 = r_2;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['f-d'] = 1.0676163423450994e+308
argument11[5] = [0,25]
return a+b-c
};
var argument11 = [655,100,843,1.7976931348623157e+308,59,460,627,49,627];
var argument12 = null;
var base_0 = [627,1.7976931348623157e+308,618,0,242]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,1.7976931348623157e+308,618,0,242]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,1.7976931348623157e+308,618,0,242]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,1.7976931348623157e+308,618,0,242]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findGen/test442.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)