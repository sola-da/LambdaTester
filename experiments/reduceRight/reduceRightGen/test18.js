





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = 4.3758715521445136e+307
base_0[5] = {"mJ":"S2tF","@":"p$ZCC","":9.558391731901696e+307,"1.7246513456985104e+308":-1}
argument3['!j'] = {}
return a-b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = [843,157,82,242]
base_1[1] = {"49":1.5790517567581885e+308,"5.122759301007701e+307":"","7.883890002325242e+307":"w3"}
argument4[3] = ["37","_","l8","J[","]","Un"]
return a+b*c*d
};
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = "a(L)h%='BHT6"
argument5[0] = {"403":126,"1.335145991995537e+308":"","":"","@St":"1","6.444829343698777e+306":"","s":"f","1.7976931348623157e+308":"[Kv"}
return a+b/c-d
};
var argument6 = r_0;
var argument7 = {"213":"","242":6.805671506347077e+307,"460":"","595":"","783":"L",")":969,"":"4","1.4805221949558912e+308":"o","5.012887173795741e+307":1.7783794731378768e+308,"R^":5.435641141050289e+307};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = null
base_3[7] = ""
return a/b+c+d
};
var argument9 = null;
var base_0 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test18.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)