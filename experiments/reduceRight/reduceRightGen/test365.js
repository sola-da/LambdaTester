





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"9":"FWv9","618":"{d,","R_6}":1.0839412254275045e+308,"6.057992580806615e+307":1.7055360203662907e+308,"":""}
base_0[0][0] = ["U",460,0]
base_0[5] = [0,714,213,893]
return a*b+c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][3] = {"0":"=","100":3.393442888848869e+307,"242":"}","":"","i":""}
return a*b+c/d
};
var argument3 = {"59":"R","82":3.659453639482625e+307,"8.883447834267253e+307":1.571761451518634e+308,"":""};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['F2nCX>6'] = {"[K":714,"6.103171277503947e+306":"O","1.0013294045010012e+308":"I","1.4861701077421113e+308":"","":5e-324,"H":3.176191082559868e+306,"luX":"O3","Qz":"tKl`"}
argument7[126] = {"655":"Y","Rx":"+"}
return a/b/c+d
};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = null
argument10['T'] = true
argument10['8('] = ""
return a/b*c-d
};
var base_0 = ["e#","t1R","`hIs","Zl","k5$"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e#","t1R","`hIs","Zl","k5$"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e#","t1R","`hIs","Zl","k5$"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e#","t1R","`hIs","Zl","k5$"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test365.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)