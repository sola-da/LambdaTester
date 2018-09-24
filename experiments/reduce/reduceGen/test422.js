





var callbackArguments = [];
var argument1 = false;
var argument2 = true;
var argument3 = [618,595,823,5e-324,595,705,843];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = true
argument1[8] = {"843":"","4.802313429837208e+307":"I","":1.776437160103121e+308,"1.0643422638095516e+308":"P","p":823,"<":7.095847465944976e+307}
return a-b*c+d
};
var argument5 = null;
var argument6 = null;
var argument7 = 627;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = [157,213,"$A","Z}W",82,"}I|","n",893,"1"]
argument7[4] = {"82":"","157":1.7036137227615242e+308,"k":213,"3.398721440022345e+307":"A?S9","":"","9.520706774162365e+307":705,"L":1.2212822301980507e+308,"DCP":"T"}
base_1[8] = {"157":126,"627":5.734220481526529e+307,"969":7.110329698036935e+307,"":"","1.0028522303675823e+308":"|","-1":"",">0Hm*":"1M","3.895712562698212e+307":"`e","-100":1.4028206123503031e+308}
return a/b+c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = true
argument9[2] = false
return a*b-c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = {"705":"H6","969":"C$","":":f","1.1903717808226453e+307":6.216415049783956e+307,"E":"gW"}
return a-b/c-d
};
var base_0 = [607,157,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,157,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,157,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,157,893]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test422.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)