





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = null
base_0[0][1] = {"2.34925722874895e+307":8.387984397929389e+307}
return a-b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = null
return a*b-c
};
var argument4 = {"59":"}","":6.506929612833831e+307,"1.4570946481947045e+308":893,"?":"w","l":655,"Ni":"o r","8.789691383484239e+307":"",",":1.4116744704696113e+308};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][1] = 0
argument7[59] = 1.0889413499217868e+308
base_2[0] = true
return a+b+c
};
var argument6 = [157,"Z",969,403,-100,595,"6"];
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[8] = "}Nc"
argument10[1.7976931348623157e+308] = 213
return a+b*c
};
var base_0 = [213,49,49,893,1.7976931348623157e+308,969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,49,49,893,1.7976931348623157e+308,969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,49,49,893,1.7976931348623157e+308,969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,49,49,893,1.7976931348623157e+308,969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test553.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)