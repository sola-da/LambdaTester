





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = "!"
base_0[7] = {"59":2.5175129962984936e+307,"655":"mvAh2(z","":"","1.916404402859624e+307":242,"1.7976931348623157e+308":5.348127530625511e+307,"?":4.835256638599211e+307,"1.9934891090188545e+307":893,"`!":403}
return a/b/c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"126":"","J":9.51427155256739e+307,"H":"","2.7364938486572965e+307":"","2.624518757434797e+307":3.019233712083943e+307,"":1.2405086764925561e+308,"?NE":"","1.634012382773645e+308":9.76034060619332e+307,"YP":"","1.2024557613506655e+308":969}
base_1[3] = [783]
return a/b/c+d
};
var argument4 = true;
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = ""
argument6[1] = null
base_2[1] = ""
return a*b/c-d
};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = [126,25,">B"]
base_3 = {"t":1.4405445347534e+308,"":"8o"}
argument9 = false
return a*b/c/d
};
var argument9 = false;
var argument10 = null;
var base_0 = [893,595,157,595,157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,595,157,595,157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,595,157,595,157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,595,157,595,157]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test16.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)