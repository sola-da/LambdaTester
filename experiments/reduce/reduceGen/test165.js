





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = ""
base_0[5] = null
argument1[1] = {"59":"DL","1.3555547594206393e+308":618}
return a*b/c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = 49
argument3[3] = {"8.79118052269374e+307":4.1180992110310514e+307,"%":"","1.6075703803819247e+307":783,"":"F=B(k","-100":"","4.3986422659590694e+307":5.522798137676243e+307,"6.418029417620922e+307":"3"}
argument4[5] = ["Pf","*!qq","f"]
return a+b*c+d
};
var argument3 = null;
var argument4 = null;
var argument5 = false;
var argument6 = r_2;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"25":157,"618":1.4732202189286105e+308}
argument5[4] = null
argument6[5] = 1.0295147649392018e+307
return a*b-c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = true
argument9[2] = ["6bSf","1mF"]
base_3[7] = {"25":"","3.7829128828161406e+307":"","U8^-":"T","1.0621979833367949e+308":3.3215391156210527e+307,"5.524571520506323e+307":403,"1.0028058742483738e+308":1.2401846461225833e+306,"1.4608139937481083e+308":1.1507331341026996e+308}
return a/b/c+d
};
var base_0 = [242,627,403,460,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,627,403,460,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,627,403,460,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,627,403,460,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test165.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)