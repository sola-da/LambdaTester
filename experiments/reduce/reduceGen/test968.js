





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = 7.112346808174109e+307
return a-b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = "B"
argument7[4] = 607
base_1[1][3] = {"0":1.0967681330218336e+308,"618":3.3056179856943163e+307,"823":9.353784914682789e+306,"":213,"2.4712458668053003e+307":"","A":"SB(F","1.786628120246882e+308":"","o":1.2058229280023984e+308}
return a/b/c/d
};
var argument6 = false;
var argument7 = "";
var argument8 = null;
var argument9 = r_2;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.4205726959827606e+308] = {"100":8.791748659538936e+305,"213":"Qr]","403":4.2378191096352584e+307,"714":"","783":"","1.5233869240976684e+307":82,"":783,"6.613507617467967e+307":1.7968498109877937e+308}
return a/b*c/d
};
var argument11 = true;
var argument12 = r_0;
var argument13 = [213,783,460,893,893,1.7976931348623157e+308,122,714];
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2] = {"49":"@W:","157":"","242":1.1233392543030932e+308,"627":"","6.335092227288792e+307":618,"":4.637701080127524e+307,"R-":"","&8":595,"1.772346379403104e+308":"o"}
argument12[1.4205726959827606e+308] = "4m"
base_3[0] = [213]
return a-b/c+d
};
var base_0 = ["0J$k","QJQ",122,460,"*",893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0J$k","QJQ",122,460,"*",893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0J$k","QJQ",122,460,"*",893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0J$k","QJQ",122,460,"*",893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test968.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)