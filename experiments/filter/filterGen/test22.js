





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = ["mt="]
argument2[2] = false
base_0 = {"1.3698464839007988e+308":1.7690134087965453e+308,"3.397030658312975e+307":4.349855073289407e+307,"":"'!","1.1207930465337737e+308":"+!","Og":"","1.4164188664283715e+308":1.146086214579171e+307,"h":714,"9.772706708478732e+306":122}
return a*b/c
};
var argument2 = true;
var argument3 = [25,49,122,59,618,5e-324,-1,969,893];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = 607
base_1[1] = "-_"
return a*b-c
};
var argument5 = null;
var argument6 = 705;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = {"0":627,"":403}
base_2[3] = false
base_2[2] = false
return a+b/c
};
var argument8 = true;
var argument9 = 1.877716605497538e+307;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = true
return a-b/c
};
var argument11 = r_3;
var argument12 = null;
var base_0 = ["{","r","+"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{","r","+"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test22.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)