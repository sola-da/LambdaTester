





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][1] = null
argument2[1.921533274132203e+307] = ""
return a+b*c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = null
argument4[8] = {"213":49,"cjv":213,"<":1.3155468916333707e+308}
return a+b-c/d
};
var argument4 = null;
var argument5 = "";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.624051682326797e+306] = ""
argument7[100] = ""
base_2[4] = false
return a/b+c*d
};
var argument7 = [0,627,595];
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[8] = 1.4599952021557833e+308
base_3[6] = {"82":157,"":"","5.206247168397595e+307":705,"1.147324554594071e+308":"","1.293547897959952e+307":""}
argument10['PK4'] = ["1",714,595,"5_"]
return a/b*c*d
};
var argument10 = true;
var argument11 = {"":1.6855646131104855e+308,"o":"q","[V,G":"m","9.54066081381318e+307":4.778494890035141e+307,"6i":893,"5.234095620831552e+307":"d","N":823};
var base_0 = ["GXa","I+&","5)","W(","MW"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["GXa","I+&","5)","W(","MW"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["GXa","I+&","5)","W(","MW"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["GXa","I+&","5)","W(","MW"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test928.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)