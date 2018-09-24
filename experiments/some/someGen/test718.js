





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = null
argument2[7] = {":b":""}
return a*b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = true
base_1[7] = "Je"
base_1[4][7] = [">","QBC","X",":6!kG","X(","H","r7","K","WY6"]
return a/b+c
};
var argument4 = [714,157,705,122,969,823,1.7976931348623157e+308,618,843,157];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = {"Q<":9.284542135757962e+307,"":"","1.2697286200770541e+308":6.583075321756736e+307}
base_2[3][4] = ["1{Q3(v","Oo(XfY##y",">"]
base_2[6] = ["K","D",460,595,")t","ORE6"]
return a-b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[618] = 25
base_3[3][6] = ""
argument8[1.5109538778533692e+308] = 1.7976931348623157e+308
return a-b+c
};
var argument8 = [59,122,213,25,100,157,126,100];
var argument9 = false;
var base_0 = [49,213,403,-1,893,82,59,59,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,213,403,-1,893,82,59,59,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,213,403,-1,893,82,59,59,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,213,403,-1,893,82,59,59,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/some/someGen/test718.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)