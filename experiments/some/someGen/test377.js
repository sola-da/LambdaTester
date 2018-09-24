





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = {"8.372230012031263e+307":"x'","V":"f","1.2670592590575675e+308":"3","#":1.7231509278619084e+308,"5e-324":1.100940225913386e+308,"Jb":5.769209924172425e+307,"":""}
return a*b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][7] = ["am","X{","ELr^","wZ"]
base_1[2][5] = [100,595,1.7976931348623157e+308,122,783,823,627,0]
base_1[2] = ["6",893,618,460,"y","y","<","x"]
return a+b-c
};
var argument5 = "";
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[9] = {"714":"5","893":1.70629127458123e+308,"1.5614032081779189e+308":4.63049880542691e+307,"5.459924488520954e+307":1.7246478896876527e+308,"":607,",D":1.2322919426551648e+308,"1.0341190731084043e+308":49,"[":100}
argument8['f9zgt4n!ZJR]W'] = true
base_2 = null
return a-b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = [823,0,460,655,59,705]
base_3[7] = ""
return a+b+c
};
var base_0 = ["&|","K",627,"x:g","(","A(t"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&|","K",627,"x:g","(","A(t"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&|","K",627,"x:g","(","A(t"]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&|","K",627,"x:g","(","A(t"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test377.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)