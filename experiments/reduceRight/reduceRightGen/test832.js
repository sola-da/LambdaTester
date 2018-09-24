





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['w'] = true
argument3[62] = {"25":1.3280182157926125e+308,"":"","K":"aC&D5pg","p3G^":2.0688702175418401e+307}
return a+b+c*d
};
var argument2 = 1.109143026423885e+308;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = true
argument5['AwD'] = 823
return a/b/c/d
};
var argument5 = {};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = [122,126,595,1.7976931348623157e+308,843,655,1.7976931348623157e+308,403,714]
return a/b*c*d
};
var argument7 = "";
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = {"122":"","705":"ga>t","":"","(":5.327160471375469e+306,"4O":1.3639646690039299e+307,"[z":"","1.7976931348623157e+308":"5["}
argument10[1] = ""
argument10[25] = ["Z",242,25,1.7976931348623157e+308,595,"Mx",893]
return a-b+c*d
};
var argument10 = ["V","j"];
var base_0 = ["KVYku","##,W{J0@3","-","w","AN"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["KVYku","##,W{J0@3","-","w","AN"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["KVYku","##,W{J0@3","-","w","AN"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["KVYku","##,W{J0@3","-","w","AN"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test832.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)