





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = false
return a+b-c
};
var argument2 = false;
var argument3 = "sJRZP";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.6798476101238045e+308] = true
base_1[4][8] = ["t","a"]
return a-b+c
};
var argument5 = "cyy";
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = [843,"I",823,49,25,213,705,"}","nE",403]
return a/b/c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['f'] = 1.7760410858669977e+308
return a/b/c
};
var argument10 = true;
var argument11 = {"6":242,"-sY":618,"7.383115552003257e+307":"LA%","9.551053197482062e+307":0,"":1.7976931348623157e+308,"<":"","1.4289232438474968e+308":"","4.344160092920461e+307":1.3983571854367463e+308};
var base_0 = [59,714,1.7976931348623157e+308,25,157]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,714,1.7976931348623157e+308,25,157]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,714,1.7976931348623157e+308,25,157]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,714,1.7976931348623157e+308,25,157]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test327.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)