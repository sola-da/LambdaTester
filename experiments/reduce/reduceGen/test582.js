





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.35085648319999e+307] = null
argument3[25] = ["N","i<K","9Z`","ON","[V","ehGOQ","^%","{","Mn","ZF6+"]
return a*b/c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = 618
argument5[4] = ""
return a*b/c+d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = [126,460,0,705]
return a-b-c-d
};
var argument6 = 1.178799939536289e+307;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = {"100":"","783":3.8723262475131453e+307,"5.042889731996178e+307":"","":"","7.067963191448859e+307":4.660999425004355e+306,"1.0644271173504569e+308":6.173331646386768e+307,"_p":"","1.7976931348623157e+308":""}
argument8[82] = false
return a/b-c/d
};
var base_0 = [627,49,1.7976931348623157e+308,157,126,618,-1,893,705,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,49,1.7976931348623157e+308,157,126,618,-1,893,705,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,49,1.7976931348623157e+308,157,126,618,-1,893,705,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,49,1.7976931348623157e+308,157,126,618,-1,893,705,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test582.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)