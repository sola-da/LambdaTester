





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['io'] = 1.6532301433520104e+308
argument2['g]'] = "Q"
argument2['sJRZP'] = {"5.671630842312328e+306":"07",",":969,"":"","pUf<=":0,",f":"hv>","_m":"","1.473779378272734e+308":"","1.2434180084069292e+308":"","1.6771859213783019e+308":"","G":1.7026953276819402e+307}
return a+b/c
};
var argument2 = {"":714};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = 49
return a+b*c
};
var argument4 = null;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = [607,-1]
return a-b/c
};
var argument7 = {"":"","1.7843435601239342e+308":"","1.2552739796798302e+308":-100,"1.782536822009663e+308":"6","w":1.5239068223963495e+308};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = null
return a-b/c
};
var argument9 = ["0E<(","4","6","h)$","3n","4OW]","=[H","-"];
var argument10 = false;
var base_0 = [627,59,59,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,59,59,82]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,59,59,82]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,59,59,82]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test938.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)