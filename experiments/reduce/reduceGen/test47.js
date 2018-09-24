





var callbackArguments = [];
var argument1 = [969];
var argument2 = false;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = {"655":9.175922697241083e+307,"":"","3.152833696685252e+307":"","YN":"Ck"}
return a/b/c+d
};
var argument5 = true;
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"9":"+","607":705,"p":6.04633110614551e+307,"":"u","nH":242,"n":"L"}
return a/b*c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = true
return a/b*c-d
};
var argument10 = null;
var argument11 = 1.0734641635024437e+308;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[2] = false
return a*b+c+d
};
var base_0 = [82,460,213,705,-1,843,403,655,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,460,213,705,-1,843,403,655,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,460,213,705,-1,843,403,655,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,460,213,705,-1,843,403,655,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test47.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)