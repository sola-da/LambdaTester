





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = ""
argument2[4] = "["
return a-b/c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['7q('] = null
argument5[3] = {"59":"=","655":"","1.3015093478180305e+307":0,"":"","6.970589041441287e+307":"hN","*j#":655}
argument4[7.92397107964922e+307] = ["C",",&X",">","z"]
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = {"2.798899790070099e+307":"-e<Ex","3.0260537123502748e+307":"|L","":1.1708674359568054e+308}
argument6[8.639664788900972e+307] = false
argument6['ns'] = null
return a+b-c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['-'] = {"122":1.318638369558606e+308,"1.461006975536106e+308":"g$","":""}
argument8[1.9097830510613482e+307] = true
argument9[1.3107131183454087e+308] = {"705":"H","1.0539853554203716e+308":""}
return a-b-c
};
var argument8 = r_2;
var base_0 = [122,49,49,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,49,49,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,49,49,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,49,49,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test824.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)