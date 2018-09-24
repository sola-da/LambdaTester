





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = false
base_0[0][6] = "4"
argument2[3] = {"2.9138231903435103e+307":"","D=":5.977018303436771e+307,"7.690065790455121e+307":"","":893}
return a-b*c
};
var argument2 = 2.930245954917527e+306;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = 6.884933396975681e+307
return a/b/c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = null
argument6[6.447566193969e+307] = null
argument7[5] = {"403":"","1.7976931348623157e+308":"1","":"_","1.2245804065868134e+308":1.6125401021723595e+308,"1.6059380021281525e+308":1.1191297343714261e+308,"1.7960242061467857e+308":8.507813803289103e+307,"3.326386079205909e+306":705,"-q":122,"7.00981346146076e+307":" "}
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[82] = ""
argument7[1.9097830510613482e+307] = true
base_3[5]['VsR'] = null
return a+b-c
};
var argument7 = ["&s","y>","*[","c","Rf","_%"];
var base_0 = [82,49,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,49,122]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,49,122]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,49,122]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test923.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)