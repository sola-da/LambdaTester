





var callbackArguments = [];
var argument1 = false;
var argument2 = "`";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = null
return a-b-c*d
};
var argument5 = {"783":2.287192392495372e+307,"4.273591666054041e+307":1.4456434069271093e+308,"1H=im":"^#&t","":1.2582811767154877e+307,"E":"","1.9790907935240508e+307":"6","1.26850174334409e+308":7.667346353135682e+307,"9.065568984505817e+307":2.482908916231815e+307};
var argument6 = false;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = ["g","HY"]
argument7[0] = "2"
base_1[8] = "=:"
return a-b*c-d
};
var argument9 = ["P","T^","_bko","0","0=1 ","cn"];
var argument10 = false;
var argument11 = r_1;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = 1.6245225621869017e+308
argument10 = ""
return a+b/c/d
};
var argument13 = null;
var argument14 = null;
var argument15 = null;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = null
return a*b*c+d
};
var base_0 = [655,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,783]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test208.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)