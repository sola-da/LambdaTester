





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = true
argument2[6] = null
argument2['v'] = ["=","1U",";0hV","8","891KP<","5=","K","fNW&=S"]
return a-b-c+d
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = 823
argument5[2] = {"59":655,"4.989309227716171e+307":25,"3.7603353200832835e+307":"Nt"}
argument5['v'] = null
return a*b+c/d
};
var argument5 = 6.479711768635933e+307;
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 1.1089087602842053e+308
return a-b-c/d
};
var argument8 = r_2;
var argument9 = {"655":"7Y","893":"?T","1.6537183171194879e+308":"","1.2117754524503785e+308":783,"z2":3.8451399511519344e+307,"":157,"-1":969,"@v$":969,"1.6106329837899857e+308":"","1.566861569485989e+307":""};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = ""
base_3[6][2] = 6.588688264158746e+307
return a/b*c-d
};
var base_0 = [705,213,655,714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,213,655,714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,213,655,714]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,213,655,714]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test346.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)