





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = 1.6532301433520104e+308
argument2[157] = "Q"
argument2[2] = {"5.671630842312328e+306":"07",",":969,"":"","pUf<=":0,",f":"hv>","_m":"","1.473779378272734e+308":"","1.2434180084069292e+308":"","1.6771859213783019e+308":"","G":1.7026953276819402e+307}
return a+b/c
};
var argument2 = {"":714};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['c'] = 49
return a+b*c
};
var argument4 = null;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = [607,-1]
return a-b/c
};
var argument7 = {"":"","1.7843435601239342e+308":"","1.2552739796798302e+308":-100,"1.782536822009663e+308":"6","w":1.5239068223963495e+308};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['n,5s@s'] = null
return a-b/c
};
var argument9 = ["0E<(","4","6","h)$","3n","4OW]","=[H","-"];
var argument10 = false;
var base_0 = [627,59,59,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,59,59,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,59,59,82]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test919.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)