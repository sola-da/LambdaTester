





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = 7.918132356695929e+307
argument2[6] = null
return a*b+c
};
var argument2 = "i";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = {"0":"","8":1.0720735441897305e+308,"460":7.260049758224471e+307,"823":"J"," ":1.623160852570887e+308,"1.99341259649075e+307":1.7976931348623157e+308,")":"",":":969}
base_1[2][5e-324] = 1.2467902949798526e+307
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2.249941463060761e+307] = ["^",893,">",-1,893,"t",242]
argument7[7] = null
argument6[0] = null
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9] = [":","*U8",")","z","q^(V","R","_L","BK#","@"]
return a*b-c
};
var base_0 = [618,823,0,-100,82,714,49]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,823,0,-100,82,714,49]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,823,0,-100,82,714,49]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,823,0,-100,82,714,49]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test581.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)