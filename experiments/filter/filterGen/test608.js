





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['C'] = {"49":"","100":9.950263419626299e+307,"969":"I","OU":1.4342248691295557e+308,"!":"","g3=":4.330026102563986e+307,"1.3057861926161424e+308":":","k5C":783,"7.109681938354688e+307":""}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[618] = [49,-1,100]
argument4[-100] = ["{@","c","C","M"]
base_1[1] = ["8",";&","i9","w","`",")l","_3","f"]
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][7] = {"49":"","157":"D","783":"F","823":"","":157,"-1":"","4.1426054122765786e+307":49}
base_2[8][3] = ""
argument5[242] = [618,"*6=",843,"VM",25,-1]
return a/b*c
};
var argument4 = {"714":"","9.839970798460066e+307":"49","6.561141640148101e+307":"BZJ","":1.7707586245303001e+308,"7.178677358333436e+307":"","M":"e^","1.3336830003882652e+308":9.04593521865747e+307};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[618] = 59
argument8[3.7154103611117224e+307] = null
return a/b-c
};
var base_0 = [1.7976931348623157e+308,100,705,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,100,705,-1]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,100,705,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,100,705,-1]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test608.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)