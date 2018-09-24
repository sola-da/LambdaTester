





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = 5.885123788779586e+307
base_0[4] = null
base_0[1][6] = ["v",1.7976931348623157e+308,655,25,0]
return a/b*c
};
var argument2 = r_0;
var argument3 = {"100":843,"607":"|","823":213,"nfjI4$":"[<","9.57830819579538e+307":7.876919679592868e+307,"":6.756237202041814e+307,"2.1043523520025948e+307":460,"w":"7n&K"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8][0] = [100,-100,607]
argument7 = {"3.752068960536823e+307":"F","1.1155300969633047e+308":1.4835585908879936e+308,"":"ypf","I":6.178959181231483e+307,"]Y":"","KP":403,"PQ`":"l@a"}
argument7[6] = false
return a*b+c
};
var argument6 = [-100,25,100,403,126,25,49,655,618,843];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['!j'] = null
argument7[5] = [627]
return a+b*c
};
var argument8 = r_0;
var base_0 = [403,126,618,607,25,25,783,157,607,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,126,618,607,25,25,783,157,607,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,126,618,607,25,25,783,157,607,893]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,126,618,607,25,25,783,157,607,893]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test276.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)