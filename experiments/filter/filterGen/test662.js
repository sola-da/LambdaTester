





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = [714,49,655,595,126,59,843,618]
argument2[1.7847438319683965e+308] = null
base_0[8][3] = true
return a/b*c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = ["SWe%","a","<iV&L=","sG","I","|","[^&"]
argument5[5] = ""
base_1[9] = {"59":"","783":"","6f]+7:":9.921615655735988e+307,"W":"7","":"","?I4":1.0909542589126985e+308,"9.60122734752051e+307":""}
return a/b*c
};
var argument5 = r_0;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = null
return a-b-c
};
var argument8 = r_0;
var argument9 = {"705":25,"":1.5365337553104073e+308,"?":607};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['T'] = "J"
return a-b-c
};
var base_0 = ["c","C","F","@Ze","<(","6emeS$","Of?","Y","5s!","A"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["c","C","F","@Ze","<(","6emeS$","Of?","Y","5s!","A"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["c","C","F","@Ze","<(","6emeS$","Of?","Y","5s!","A"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test662.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)