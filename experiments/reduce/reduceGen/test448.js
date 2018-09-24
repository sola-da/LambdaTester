





var callbackArguments = [];
var argument1 = "";
var argument2 = "L";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = null
return a+b-c+d
};
var argument5 = null;
var argument6 = null;
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = true
argument6[1.1277822633002616e+308] = ["2","#&b","5+_5","@Y","trLk8"]
argument6[5] = -100
return a+b*c*d
};
var argument9 = 1.5350092231643361e+308;
var argument10 = ["BiO",618,100,242,607,-1];
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[-1] = {"213":"s","2.8833601803253676e+307":1.5953186448151014e+308,"":"Zay","9.02298269930755e+307":" ","gQIsN":213,"8.579533089520775e+306":242}
argument10[0] = {"7":"","49":"","655":1.3896396770301682e+308,"9.327093229385558e+307":"0","":705,"1.1530253708021494e+307":843,"dfEJ":6.140560765675502e+307,"*":1.5687052845175777e+308}
return a/b*c/d
};
var argument13 = false;
var argument14 = null;
var argument15 = r_3;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = ""
argument14[213] = {}
argument15[3] = false
return a*b/c-d
};
var base_0 = [823,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test448.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)