





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9.869573703797622e+307] = null
argument2['A'] = 213
return a/b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = 49
base_1[7] = null
argument5[403] = ""
return a*b+c
};
var argument5 = {"969":"","":59};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2] = ""
base_2 = "3"
return a*b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = null
argument9 = "QW"
base_3[7][2] = ["C","H","L",157,"Fl=",627,157]
return a/b-c
};
var argument9 = r_2;
var base_0 = [823,823,618,0,843,783,595,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,823,618,0,843,783,595,122]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,823,618,0,843,783,595,122]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test283.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)