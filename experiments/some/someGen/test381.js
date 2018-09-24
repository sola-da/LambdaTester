





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = true
return a+b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2.249941463060761e+307] = {"59":893,"242":157,">g":25,"dB":"E","":893,"5I":0,"1.2913525229684295e+308":"","8.746692004339982e+307":0,"b":627}
argument4[2.249941463060761e+307] = {"627":843,"":823,"9.836621059775386e+307":4.604210177238464e+306,"7.071341382144966e+307":"","1.6025414364764297e+308":"u"}
argument4[705] = 213
return a*b/c
};
var argument4 = null;
var argument5 = [49,893,969,213,893,714];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = true
argument6[0] = ""
argument7['f9zgt4n!ZJR]W'] = null
return a-b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = null
base_3[1][3] = {"25":0,"714":"`'j","8.113148585539039e+307":">","V":"bo","":"4","7.969772263373896e+307":1.0367667467396255e+308,"9G":59,"Yp":""}
argument7[4] = false
return a-b+c
};
var argument8 = 607;
var argument9 = 6.78448400572584e+307;
var base_0 = [595,705,100,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,705,100,122]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,705,100,122]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,705,100,122]
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
require("fs").writeFileSync("./experiments/some/someGen/test381.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)