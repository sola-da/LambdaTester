





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = 1.2927364063498626e+308
argument2[82] = true
return a-b+c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = "eG|"
return a+b-c*d
};
var argument3 = r_1;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.359136872727139e+308] = 122
argument7[595] = [157,213,823,59,122,969,705,49]
return a/b+c*d
};
var argument6 = r_1;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = false
argument8[2.1869172855352885e+307] = true
argument9[627] = null
return a+b+c+d
};
var argument9 = false;
var argument10 = "";
var base_0 = ["x","tq2",627,"s-dJAHU{D","tU",122,"q",126,"x*",783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x","tq2",627,"s-dJAHU{D","tU",122,"q",126,"x*",783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x","tq2",627,"s-dJAHU{D","tU",122,"q",126,"x*",783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x","tq2",627,"s-dJAHU{D","tU",122,"q",126,"x*",783]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test737.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)