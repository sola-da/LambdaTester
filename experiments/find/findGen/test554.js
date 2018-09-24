





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4.953791384496108e+307] = {"783":"7","G":5.093975849588016e+307,"":5.115729760701768e+307,"3.4037744751561923e+307":714,"1.0431390243769829e+308":403,"1.5291041095835296e+308":"","1.2128724885364243e+308":-1,"4.014027735521214e+307":1.7139764314164577e+308,"0a":"_t"}
argument3[893] = false
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6][4] = 1.2950004832148817e+308
return a-b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][4] = ""
return a-b+c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1] = {"5":3.1487160916135206e+307,"25":2.6839802561023637e+307,"783":"","YWTh":1.1981339510808592e+308,"q":1.3124217785160863e+308,"":"","2.301063901552507e+307":""}
argument7[969] = "yH;;"
argument5[5] = {"126":"2d[","595":-100,"783":"[G","823":"","5.999658216034683e+307":"E","1.2647352978584056e+308":""}
return a-b+c
};
var base_0 = ["2","bo","-Ll","v","{","dv(R"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","bo","-Ll","v","{","dv(R"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","bo","-Ll","v","{","dv(R"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2","bo","-Ll","v","{","dv(R"]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test554.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)