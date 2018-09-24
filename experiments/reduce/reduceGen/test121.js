





var callbackArguments = [];
var argument1 = [49,403,460,49,460,5e-324];
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = ["jzr","K","8","n","Kq","4;s&yv(","ea2|"]
argument2[4] = false
argument2[1.1277822633002616e+308] = null
return a/b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = {"126":6.93768977559121e+307,"655":3.373470740294409e+307,"":"","1.545788079285053e+308":"","3.289307266532534e+307":"Y>P","6.735273359514958e+307":460,"#FAl":-1,"I":"G"}
argument6[4] = {"655":1.382486429600844e+308,"823":213,"7.284753203796583e+307":242,"1.6034337133493601e+308":"","9.00812050191218e+307":1.0962782619539227e+308,"1.3212068666098698e+308":"(i95","S+p":"Apo","9.051335159139241e+307":"K","5.094771876806349e+307":157}
return a-b/c/d
};
var argument6 = true;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = true
argument8[0] = false
return a/b/c/d
};
var argument9 = null;
var argument10 = r_1;
var argument11 = [893,1.7976931348623157e+308,"S"];
var argument12 = true;
var argument13 = r_1;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1] = false
base_3[3] = true
return a-b-c/d
};
var base_0 = [0,"M",823,82,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"M",823,82,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"M",823,82,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"M",823,82,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test121.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)