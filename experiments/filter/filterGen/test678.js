





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = [460,618,403,893,460]
base_0[0][5e-324] = false
return a-b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.3434821406183095e+308] = true
return a/b+c
};
var argument4 = 595;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"655":"","":"P;","6.42043339648449e+307":7.555597783804237e+307,"1.463103728154852e+308":82,"7.067963191448859e+307":4.660999425004355e+306}
base_2[1][1] = "B"
return a*b-c
};
var argument6 = {"82":"hL","595":"R","705":"","6.173331646386768e+307":"_p","":783,"3.8723262475131453e+307":1.6957166816562492e+308};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][5e-324] = ""
argument9 = 82
return a*b/c
};
var argument8 = null;
var base_0 = ["#","`","ON","[V","ehGOQ","^%","{","Mn"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","`","ON","[V","ehGOQ","^%","{","Mn"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test678.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)