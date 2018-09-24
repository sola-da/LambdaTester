





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = 893;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1280896016417002e+307] = [607,0,"7","%","i3sSxAR"]
return a+b/c/d
};
var argument5 = null;
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = true
return a/b*c/d
};
var argument9 = null;
var argument10 = [969,"2",843,"o","8&)","7",969,1.7976931348623157e+308,1.7976931348623157e+308];
var argument11 = [-1,"!","y","UVJ",969];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.1277822633002616e+308] = 122
return a*b-c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[1.359136872727139e+308] = 8.717404407683206e+307
argument15[4] = [213,595,242,122,893]
return a*b/c+d
};
var base_0 = [25,-100,25,122,1.7976931348623157e+308,122,-100,157,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,-100,25,122,1.7976931348623157e+308,122,-100,157,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,-100,25,122,1.7976931348623157e+308,122,-100,157,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,-100,25,122,1.7976931348623157e+308,122,-100,157,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test564.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)