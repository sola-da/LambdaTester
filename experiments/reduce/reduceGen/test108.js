





var callbackArguments = [];
var argument1 = true;
var argument2 = r_0;
var argument3 = 1.4491221041805688e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = 9.558856873569777e+307
argument1[0] = {"0":1.611819434189038e+306,"627":"","893":"D","1.1975995924249525e+308":"","":843,"mI":122,"1.7976931348623157e+308":618,"5.68950665532673e+307":627,"6.828802070389855e+307":"","3.1955102073865713e+307":7.073676126547249e+307}
return a-b+c-d
};
var argument5 = null;
var argument6 = null;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = "f"
return a-b-c-d
};
var argument9 = true;
var argument10 = false;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = null
return a+b-c+d
};
var argument13 = ["D7H","P","i","@","@","A","r","&"];
var argument14 = false;
var argument15 = 5.383415815613381e+307;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = false
argument13[0] = 100
return a+b-c+d
};
var base_0 = [403,"k","GCoE",655,"A+U33a{","UL@t"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"k","GCoE",655,"A+U33a{","UL@t"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"k","GCoE",655,"A+U33a{","UL@t"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"k","GCoE",655,"A+U33a{","UL@t"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test108.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)