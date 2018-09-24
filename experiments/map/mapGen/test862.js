





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = {"82":"Q{","783":4.764639814682322e+307,"":"IKcR","1.5450929638868195e+308":"I","6.260395192105531e+307":705,"3.8094489678587116e+307":"r","1.4841542293433848e+308":595,"'":969}
base_0[1][0] = 4.068770610600895e+307
base_0[1][3.5329845145600404e+307] = 213
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[618] = {"1":"","100":"%","":618,"1.4711733941995158e+308":":"}
argument3[2] = {"843":1.7043907228688217e+305,"":4.859612864372391e+306,"6.452074605254766e+307":"","$":"-f*"}
argument3['C'] = 1.7976931348623157e+308
return a+b/c
};
var argument3 = {"595":"","627":4.446771312481538e+307,"1.440111349616383e+308":"","":823,"3.1542537003817227e+307":49,":E":"","0<":1.7976931348623157e+308};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = "$"
argument7[403] = {"7":403,"59":"","627":6.634183071488961e+307,"7.235901552318455e+307":"","":"I","0LMb":6.181484001731327e+307,"1.1788490186428198e+308":"","+":"","1.06702053869618e+308":1.6031014553120698e+308}
argument6[607] = [618,618,705,460,893,705,5e-324,783,157]
return a+b/c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][3] = true
argument8[3] = null
return a/b+c
};
var argument8 = null;
var base_0 = ["p","t)","=i","-JC","p[x"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["p","t)","=i","-JC","p[x"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["p","t)","=i","-JC","p[x"]
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
require("fs").writeFileSync("./experiments/map/mapGen/test862.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)