





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"122":"","655":-1,"":655,":":1.7976931348623157e+308}
base_0[1][0] = null
argument2['AwD'] = 893
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = 655
argument4['AA@'] = true
base_1[3] = "D+"
return a/b*c
};
var argument3 = ["cBb","+",607,595,"-","C"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = null
base_2[7] = {"893":"","-1":"","":242}
argument4[5] = {"1.0749661174454474e+308":"","r":0,"":1.7976931348623157e+308,"5.942718957968762e+307":8.067119708485706e+307,"1.2050438555023564e+308":595,"w":6.520562252660526e+306,"7.256633653975998e+307":"",")'":"P"}
return a*b/c
};
var argument5 = {"49":"=Eudc@#","6.447566193969e+307":0,"$gO":""};
var argument6 = "6N$";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = false
argument7[4] = ["ou",893]
return a*b+c
};
var argument8 = r_0;
var base_0 = ["r","<",595,0]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r","<",595,0]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r","<",595,0]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r","<",595,0]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test904.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)