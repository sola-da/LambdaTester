





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = null
base_0[2] = 82
return a/b-c-d
};
var argument2 = 618;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"126":783,"1.7976931348623157e+308":"J","!p$#1":2.3824651763086134e+307,"_":")","6.441329679827585e+307":":V","s?":"3","":"","e":2.8579119300878533e+307}
base_1[2] = {"6.655943288024623e+307":"q"}
argument5[1.1277822633002616e+308] = ";"
return a+b/c-d
};
var argument5 = null;
var argument6 = 8.391239965481314e+307;
var argument7 = r_2;
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"0":"","5.469265873851155e+306":1.3921651655528982e+308,"e":843,"B;":""}
return a+b-c+d
};
var argument10 = r_2;
var argument11 = {"":"k"};
var argument12 = ["nA",823,126,122,"J]@","w",0];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = {"618":5.794253295150726e+307,"7.796959798425967e+307":969,"":"m"}
base_3[0] = 1.6651855210096624e+308
base_3[0][0] = false
return a-b*c/d
};
var base_0 = [25,"9"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,"9"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,"9"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,"9"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test71.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)