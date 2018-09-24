





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f'] = {"49":"1U","122":"","460":893,"8.397171891066856e+307":59,"2.2783026632258057e+307":595,"":595}
return a-b*c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = [122,595,242,618]
argument5[2.249941463060761e+307] = ""
base_1[9] = 4.766257010810978e+307
return a/b-c
};
var argument5 = {"122":403,"n":823,"@HeHQJu":595,"1.7976931348623157e+308":3.3900959722776486e+307};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[122] = true
argument8[1.0727847755854773e+308] = 9.478062479062356e+307
base_2[8] = [618,126]
return a-b-c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['f'] = "cYa"
argument9['_W'] = null
argument10['^h'] = true
return a/b/c
};
var argument9 = "B";
var argument10 = {"82":"hL","595":"R","705":"","6.173331646386768e+307":"_p","":783,"3.8723262475131453e+307":1.6957166816562492e+308};
var base_0 = [655,1.7976931348623157e+308,126,0,893,59,705,893,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,1.7976931348623157e+308,126,0,893,59,705,893,705]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,1.7976931348623157e+308,126,0,893,59,705,893,705]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,1.7976931348623157e+308,126,0,893,59,705,893,705]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test691.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)