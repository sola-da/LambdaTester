





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[100] = null
return a+b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[100] = true
base_1[5] = {"460":"!","b":4.936943739330788e+307}
return a*b-c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['^N'] = null
argument4['^N'] = ["61_","J","e","4","k","X","G8"]
argument4[82] = null
return a*b/c+d
};
var argument4 = 627;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = "="
argument6[2] = {"82":"k","403":6.105389437753471e+307,"":783,"cI":618,"1.050969808414196e+308":"","G":"","V":"]=M"}
base_3[0][2] = {"157":-100,"460":25,"627":403,"6.749620040398748e+307":714,"1.7976931348623157e+308":618,"5e-324":")","m1H":49,"":126,"4.909777693831154e+307":""}
return a/b+c/d
};
var argument6 = 1.35022416163272e+308;
var argument7 = "W";
var base_0 = [126,"6","gpLu",618,"U",893,783,783,"s"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,"6","gpLu",618,"U",893,783,783,"s"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,"6","gpLu",618,"U",893,783,783,"s"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,"6","gpLu",618,"U",893,783,783,"s"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test622.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)