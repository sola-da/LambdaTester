





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"843":5.350205489893954e+307,"1.4073421440829337e+308":126," {I":"","":7.619415013667415e+307}
argument2[1] = false
argument2[627] = ["c,","{9","w",823,460]
return a*b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2.1280896016417002e+307] = 82
argument2['A'] = "e"
argument4['18{'] = 1.2407166988662805e+308
return a-b*c*d
};
var argument3 = null;
var argument4 = null;
var argument5 = null;
var argument6 = ["?","r","pN"," ","F","$J","1k"];
var argument7 = {"6":"+","22":"gjK:E","82":969,"9.99694568089542e+307":"Q","1.7976931348623157e+308":"","?'!,":1.6632723022113279e+307,"1.7115027910863979e+308":"Z","':K":213,"1.2319396753706598e+308":"N:D"};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627][126] = ""
base_2 = {"607":9.443277957211525e+307,"1.143785037297211e+308":"3-","-100":7.018192628984958e+307,"@":2.9732409990372444e+307,"":1.1001348397220584e+308,"'z":1.768319230926792e+308,"-1":213,"l":6.438623722538324e+307}
return a-b-c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7.999889602676851e+307] = null
return a/b*c+d
};
var argument10 = r_1;
var argument11 = {"(I":4.317254419183507e+307,"w>9":"<P","":714};
var base_0 = [82,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test852.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)