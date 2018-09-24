





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[-1] = 6.256109929941089e+307
return a+b*c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.286160553564105e+307] = null
base_1[0][2] = 1.3128988473619286e+308
return a*b/c+d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1207829086460726e+308] = true
base_2[3] = null
base_2[6][2] = ""
return a*b+c*d
};
var argument7 = -100;
var argument8 = [893];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = false
argument10[100] = {"126":"OS4","705":1.2168619359877964e+308,"1.095221741120859e+308":" ","1.2913912555942413e+308":1.6704199757802454e+308,"1.6003910617745889e+308":"T"}
return a+b-c/d
};
var argument10 = ["!","G","!g","]r","NF","q]*2M","k"];
var argument11 = {"0":1.43100885903244e+308,"8.558677498868792e+307":"","1.7471665532666265e+308":""};
var base_0 = ["h","cx","V","D","?X","X!","2","]  e"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h","cx","V","D","?X","X!","2","]  e"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h","cx","V","D","?X","X!","2","]  e"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h","cx","V","D","?X","X!","2","]  e"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test711.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)