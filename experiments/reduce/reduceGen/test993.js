





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = {"618":1.1560721463357859e+308,"":823}
return a-b-c*d
};
var argument5 = false;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = true
argument6[1.1277822633002616e+308] = {"49":-100,"1.396947074968055e+307":"hRT","2.6213519592477017e+307":618}
argument7[4] = 1.7976931348623157e+308
return a+b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = {"8":1.6573689586549278e+308,"5'":1.294854113259873e+307,"":"","1.4452845844722162e+308":"^"}
argument10[25] = [5e-324,618,242,-100,893]
base_2[6] = {}
return a+b*c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['HMm'] = ""
argument11[5.71178064163152e+307] = {"705":9.925373501051352e+307,"7.192130587804307e+307":"","":"","1.5187946399537012e+308":"Z'&Ea}fs"}
argument12[655] = null
return a+b+c*d
};
var argument11 = [5e-324,460,-100,618];
var argument12 = r_0;
var base_0 = [25,122,126,823,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,122,126,823,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,122,126,823,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,122,126,823,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test993.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)