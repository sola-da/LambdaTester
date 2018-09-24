





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[705] = true
return a/b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4.224481734419934e+307] = null
argument4[3] = [100,100,460,59,1.7976931348623157e+308,242,59,49,-1,618]
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9] = [403,618,607,0,627,157]
base_2[3] = [783,783,100,460,595,0,126,59,627,595]
return a-b/c
};
var argument5 = r_1;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = {"82":"mQ}","607":"2","6.407463888945347e+307":843,"6.030046341826686e+307":714,"chR":1.5611605967908782e+308,"1.414366981660556e+308":"","1.0930740169564757e+308":1.108852070786525e+308}
argument7[4] = false
return a*b-c
};
var argument8 = true;
var argument9 = false;
var base_0 = ["#2lg","7z^n","F","3","6sG"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#2lg","7z^n","F","3","6sG"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#2lg","7z^n","F","3","6sG"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#2lg","7z^n","F","3","6sG"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test342.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)