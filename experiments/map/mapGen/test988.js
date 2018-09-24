





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][7] = {"126":"","705":"Mhh","783":5.849755062694495e+307,"4.0951326037990827e+307":783,"":"","XHn":"cPlW&","|":"","Mi":"I"}
base_0[0][2] = 627
return a-b-c
};
var argument2 = true;
var argument3 = [213,893,823,403,100,460,893,242];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2][6.452074605254766e+307] = null
base_1[3][1] = "z"
argument5[3] = [1.7976931348623157e+308,157,893,595]
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = 1.1777844075263102e+308
base_2[0][4] = 1.7335723560265507e+308
argument6[618] = "%"
return a+b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][3] = ["e","o","=Z","Y)","=J1*eQ[","@","v","U","D"]
base_3[6]['VsR'] = [595,126,242]
base_3 = [157,893,126,460,618,0,595]
return a*b+c
};
var argument8 = null;
var base_0 = [705,59,969,0,714,122,82,157,823,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,59,969,0,714,122,82,157,823,655]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,59,969,0,714,122,82,157,823,655]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test988.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)