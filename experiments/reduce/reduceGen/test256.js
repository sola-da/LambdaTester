





var callbackArguments = [];
var argument1 = {"100":"","157":1.270804236360712e+308,"969":5.845606185304509e+307,"":59,"1.7525743877756416e+308":969,"6.495565541494153e+307":5e-324,"8.357574063372312e+307":7.694512449000809e+307};
var argument2 = "l";
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
return a*b/c*d
};
var argument5 = 1.1907492469023144e+308;
var argument6 = {"49":"pD5","607":1.27674565497246e+308,"5.64647517628695e+307":1.6928302174601113e+307,"K":1.3208097085563408e+308,"m":"tvD","":5.595827722795552e+307,"9.228565005707999e+307":"","1.7976931348623157e+308":"!6-","2.619321211313229e+307":595};
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = null
base_1[9] = [655,627,714,25,893,82,403,59]
return a+b-c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[627] = "W"
argument11['*c'] = null
argument11['*c'] = {"0":4.761730747971375e+307,"4.1613247969935876e+307":"","1.720276145673105e+308":"","a":""}
return a*b+c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[7.463432409233234e+307] = {"25":"","":893,"(g":893,"5.217165744370757e+307":1.2385300815981474e+308,"8.862574381000535e+307":"qazM","Tcy?5^":"l","k":"","1.0456506386145557e+307":"*d`"}
argument10[8] = 1.1962624564076193e+308
return a+b/c/d
};
var base_0 = [595,823,"0","{3","<","^","]<2F",126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,823,"0","{3","<","^","]<2F",126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,823,"0","{3","<","^","]<2F",126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,823,"0","{3","<","^","]<2F",126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test256.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)