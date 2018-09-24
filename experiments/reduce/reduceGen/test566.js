





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = null
base_0[0][9.12287810829114e+307] = false
base_0[0] = ""
return a-b*c/d
};
var argument2 = true;
var argument3 = null;
var argument4 = true;
var argument5 = 1.630282125309251e+308;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6.35085648319999e+307] = ["!","p"]
argument4[627][126] = 3.8438723360207946e+307
return a/b*c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = {"1":"","403":4.604743514616606e+307,"Hm":"**p%","WO":8.324225060469998e+307,"":9.702217468056811e+307,"3.850964217621403e+307":"(","3.1354993238999377e+307":"emeS$","2.1674582402926386e+307":"f?","s!":"mI","8.792453827268366e+307":""}
argument8[1.1277822633002616e+308] = false
argument7[893] = [82,-1,403,893,82,893]
return a-b+c*d
};
var argument8 = ["O","We%","a","<iV&L=","sG","I","|"];
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['s'] = "6f]+7:"
base_3[0][4] = [100,655,213,25,122,25]
argument12['18{'] = 4.629278493126754e+307
return a+b*c+d
};
var base_0 = [213,618,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,618,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,618,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,618,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test566.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)