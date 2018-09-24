





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = 2.1319749202797884e+307
argument1[126] = "S'z"
return a-b-c*d
};
var argument2 = null;
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[893] = {"v":8.639972528763326e+307}
argument2[3] = true
return a*b/c-d
};
var argument6 = {"607":82,"655":9.938784494482101e+307,"1.7503299076721953e+308":705,"":783,"1.8021998928698314e+307":"8","-100":"+","Ucu3#":"","7.016983424121191e+307":""};
var argument7 = 5.106482529201155e+307;
var argument8 = ")*";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = {"607":1.3496718320185867e+308,"-100":8.221824820929928e+307}
base_2[5] = null
return a*b+c*d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[7.889879335222838e+307] = ""
argument12[655] = false
argument10['Cb'] = [0,213,618,59,"#<",213]
return a+b+c-d
};
var base_0 = ["!2m","y{zbaPP"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!2m","y{zbaPP"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!2m","y{zbaPP"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!2m","y{zbaPP"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test699.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)