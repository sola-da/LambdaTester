





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f'] = null
argument3[7] = 1.4803593611163155e+308
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = {"25":1.1159884214650807e+308,"627":843,"823":607,"":"W","2.2660821502442684e+307":100,"7.177530609714859e+307":126,"8.664586499106754e+307":714,"1.6483395160987604e+308":""}
base_1[4][8] = {"714":"9J","r":"","5.288786302731211e+306":"","1.4974865861120598e+305":"","4.151217229853226e+307":"","Ym{":"","2.7956072242804465e+307":"IT","":""}
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = null
base_2[1][3] = ""
argument3[1] = {"8":1.6503208615086126e+308,"1.5135743811865242e+308":1.3536352031259422e+308,"1.616181903892171e+308":"J]","":6.676409736455461e+307,"8.243888202918063e+307":"","3.9726261941570216e+307":"8tt","1.4576894507467519e+308":82,"-1":"Iw","2.0848802792098995e+307":"@n"}
return a*b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = null
return a/b/c
};
var argument6 = "";
var base_0 = [100,"L","xk",82,"TogM","_","j9","12{-+A"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"L","xk",82,"TogM","_","j9","12{-+A"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"L","xk",82,"TogM","_","j9","12{-+A"]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"L","xk",82,"TogM","_","j9","12{-+A"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test867.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)