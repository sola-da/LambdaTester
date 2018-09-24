





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = null
return a*b*c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = false
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"969":7.262150158877682e+307,"6.411414779641573e+307":4.56686735451317e+307}
argument6[3.3156198695370476e+307] = {"403":"","1.7976931348623157e+308":403,"":4.75133590796715e+307}
argument6[2] = 1.3769483062069698e+308
return a-b*c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = null
base_3[4] = "#Kdk"
return a+b/c
};
var argument8 = {"783":3.878269196555557e+307,"969":242,"1.2691302486014592e+308":823,"":122,"tFw_":1.3397539062288427e+308,"M5etW>D":1.098436747707739e+308,"4.923030791333652e+307":49,"1.9548942023972179e+307":403,"H":"u6","1.5843970963287755e+307":""};
var base_0 = [")","4",";","L","T",">","+c","3","="]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")","4",";","L","T",">","+c","3","="]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")","4",";","L","T",">","+c","3","="]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")","4",";","L","T",">","+c","3","="]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test460.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)