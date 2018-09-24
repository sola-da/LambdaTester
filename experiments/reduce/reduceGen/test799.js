





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = null
argument2[-1] = null
argument3[90] = null
return a/b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = ["e","2d","#Jo","M","x"]
base_1[1][3] = null
argument6[1.612812046173122e+308] = null
return a+b/c+d
};
var argument6 = null;
var argument7 = [25,5e-324,-100,843];
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7.889879335222838e+307] = 1.4968154767260372e+308
return a+b-c*d
};
var argument10 = 627;
var argument11 = [1.7976931348623157e+308,",_",655,"uNtg"];
var argument12 = 1.6532301433520104e+308;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['Cb'] = {"5.671630842312328e+306":"07",",":969,"":"","pUf<=":0,",f":"hv>","_m":"","1.473779378272734e+308":"","1.2434180084069292e+308":"","1.6771859213783019e+308":"","G":1.7026953276819402e+307}
base_3[1][0] = {"":714}
base_3[9] = {"6":"","49":783,"100":"","":"w","9.395355325175518e+307":8.854087872135469e+307,"X":"&","$":1.7843435601239342e+308,"-100":1.782536822009663e+308,"1.5239068223963495e+308":6.185734819407637e+307}
return a+b-c*d
};
var base_0 = [823,213,-1,82,607,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,213,-1,82,607,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,213,-1,82,607,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,213,-1,82,607,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test799.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)