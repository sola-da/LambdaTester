





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = false
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.377960715099946e+307] = "nt%3"
argument3[6] = ""
argument3[-1] = 1.4136036095414704e+307
return a-b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = "|%"
return a-b/c
};
var argument4 = {"0":6.071941014593832e+307,"242":1.6993160055851156e+308,"":893,"8.744881091184936e+307":1.0384658653216973e+308,"8.575361245828968e+307":"","-1":969};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
argument6[2] = null
return a/b-c
};
var argument6 = null;
var argument7 = r_3;
var base_0 = [460,"-",100,"+",5e-324,-100,"BXP","[<"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"-",100,"+",5e-324,-100,"BXP","[<"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"-",100,"+",5e-324,-100,"BXP","[<"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"-",100,"+",5e-324,-100,"BXP","[<"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test383.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)