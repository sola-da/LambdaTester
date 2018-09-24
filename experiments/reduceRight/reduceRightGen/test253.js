





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['8('] = ["o(","wp","|"]
argument2[0] = true
return a*b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = null
argument4 = null
return a-b-c-d
};
var argument3 = r_0;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = "C{="
argument7[-1] = 1.3331096686802583e+308
argument6[627] = true
return a/b/c-d
};
var argument6 = r_2;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[126] = {"6.950316865522607e+307":"&ZkP","w":""}
argument9[-1] = {"100":618,"126":403,"460":"D","S":"","ma":1.4000046308125677e+308,"":8.167364464965488e+307,"2.47687313645339e+307":"_","1.572126048027877e+307":"","1.6050545696524495e+308":";"}
return a/b*c+d
};
var argument8 = "";
var argument9 = "#";
var base_0 = ["v","i",618,";Zy5",126,"):","V","`U",705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","i",618,";Zy5",126,"):","V","`U",705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v","i",618,";Zy5",126,"):","V","`U",705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v","i",618,";Zy5",126,"):","V","`U",705]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test253.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)