





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[618] = ""
base_0[3] = {"705":705,"1.707432817716333e+308":1.2108342639349791e+308,"1.1455289543931213e+308":618,"1.2257061116224675e+308":""}
base_0[1][8] = null
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[618] = true
return a/b*c
};
var argument3 = [705,"@j","Zr[","y",59,"#__f)"];
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = {"126":"x't","595":3.1400015319455415e+307,"":1.4978281735097125e+308,"6.904945650315862e+307":"LBX","Y":"",";M3":714,"5e-324":"5*1m","iU":"","1.8287258517660204e+307":""}
base_2 = false
base_2['length'] = {"KV>":82,"s":4.773713486213643e+307,"1.711366232540825e+308":"|4h","":5e-324,"1.604034078039416e+308":126}
return a+b+c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = false
base_3[1][2] = {"655":"!","893":"9","a":"jvu","1.1821101285161915e+308":1.733584306154976e+308}
base_3[0] = false
return a-b-c
};
var base_0 = ["a","r"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a","r"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a","r"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a","r"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test58.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)