





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"49":"$","('":"","":"q","6.97405181258654e+307":"5","M":"A=","1.7101676502581752e+308":"m","5.53843307924891e+307":","}
base_0['length'] = ""
base_0[0] = null
return a/b-c
};
var argument2 = null;
var argument3 = {"157":"","403":5.451945056109718e+307,"460":783,"":59,"1.091477355628197e+308":"`+q","AO?":0};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = [627,595,823,627,213,82,783,122,49]
return a-b/c
};
var argument5 = "`uh:";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"8":"_","460":"","":9.641366996121299e+307,"1.1147454191353868e+308":"","-1":""}
base_2[2] = false
return a+b/c
};
var argument7 = {"126":1.5256914186531844e+308,"242":"","627":595,"G":6.013672005787866e+307,"ho":5e-324,"-":1.5281506541864616e+308,"2.654465800315281e+307":"","":157,"3.7668525981726295e+307":783,"Q]L":"_l]s"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
return a*b*c
};
var base_0 = [705,122,705,893,595,893,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,122,705,893,595,893,783]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,122,705,893,595,893,783]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,122,705,893,595,893,783]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test6.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)