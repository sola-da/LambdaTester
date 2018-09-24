





var callbackArguments = [];
var argument1 = [25];
var argument2 = ["#o","VQo","W","NX","%|","FB"];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = ""
argument1[8] = null
base_0[1][0] = {}
return a-b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = 122
argument5[2.1869172855352885e+307] = {"213":1.085678581962564e+308,"823":-100,"9.9198391644433e+307":"","":"*<","Z,{9":"[","1.2224973643290499e+308":5.438232499668677e+307,"5e-324":783}
argument5 = {"1":"wOF?","6.056904011540616e+307":"","m":"","":"","9.437723817866675e+307":595,"9.855960239111223e+307":1.1888268025101908e+308,">,":"","1.7758725368913372e+308":82,"7.577704748192051e+307":""}
return a/b-c*d
};
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 1.4643429957293667e+307
base_2 = 1.7226562414738521e+308
base_2[7] = "L"
return a/b+c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[627] = "4+s+CC"
base_3['length'] = [655,655,403,403,0,403,823,59]
return a/b/c*d
};
var argument9 = false;
var argument10 = null;
var base_0 = [595,"oG",242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"oG",242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"oG",242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test196.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)