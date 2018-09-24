





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 157
base_0[6][2] = [607,607,0,403,1.7976931348623157e+308,403,627]
argument3[1] = [213,0]
return a*b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = {"25":823,"213":"j","783":"`O","":"sb","1.460768570110346e+308":1.0352837725228177e+308,"'e2":"b","T9":242,"1.747553065101312e+308":3.2116605856760305e+307,"1.7976931348623157e+308":""}
return a-b/c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = 1.339397082630662e+308
argument3[0] = ["K","l",893,25,"x",100,607,"[&Zd"]
return a-b*c*d
};
var argument4 = null;
var argument5 = [893,"J",0,"M",823];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = null
argument7['w'] = "f!BO"
base_3[4][3] = null
return a/b*c/d
};
var base_0 = ["[","FX","`","+1","j!","J","a"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[","FX","`","+1","j!","J","a"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[","FX","`","+1","j!","J","a"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[","FX","`","+1","j!","J","a"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test144.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)