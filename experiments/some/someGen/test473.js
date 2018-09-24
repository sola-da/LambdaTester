





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = null
base_0[5][0] = {"627":"Ci","893":9.85750721466957e+307,"r;":-1,"Gm2Aa<":1.3553754092792259e+308,"":1.4049612088840997e+308,"1.5588217708895627e+308":"c","1.0384762075155107e+307":""}
return a/b-c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = 0
argument6[0] = 6.601367348269593e+307
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = ["MG!","Pt"]
argument6 = [-1,843,618,-1,157]
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = [714,460,100]
return a/b-c
};
var argument7 = {"N":1.1217891365758374e+308,"2.5134652519275607e+307":1.7257726789115233e+308,"-100":4.6380210847505516e+306,"1.6177106033227046e+308":0,"":";"};
var argument8 = null;
var base_0 = ["s6","K","%","7","A","L-","(",";x"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s6","K","%","7","A","L-","(",";x"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s6","K","%","7","A","L-","(",";x"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s6","K","%","7","A","L-","(",";x"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test473.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)