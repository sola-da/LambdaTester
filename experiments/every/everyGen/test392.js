





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = {"":"yq["}
argument3[1] = {"100":"","893":1.7976931348623157e+308,"1.3521206640106068e+308":")","-100":"c"}
return a+b+c
};
var argument3 = false;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = true
argument6[3] = null
return a/b*c
};
var argument6 = r_2;
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4.960033715165713e+307] = [122,")","X3","ixT$","@",843,"V2"]
argument9[4] = false
return a-b/c
};
var argument9 = r_2;
var base_0 = ["bO",607,";p^)8(Je",823,"h",126]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bO",607,";p^)8(Je",823,"h",126]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bO",607,";p^)8(Je",823,"h",126]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bO",607,";p^)8(Je",823,"h",126]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test392.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)