





var callbackArguments = [];
var argument1 = "";
var argument2 = "";
var argument3 = {"0":25,"25":"","122":"","655":59,"":783,":%w":"","p":"","^mH":"k:","7.201740767400223e+307":1.5934492197340131e+308,"ib":"n)"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = true
argument2[7] = ["fD","p","A0 ","g","+","_#7E","U"]
base_0[0] = 82
return a+b/c*d
};
var argument5 = true;
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = "M-"
argument6[1.1277822633002616e+308] = 6.038422757269321e+307
return a+b*c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = [242,49,49,49,893]
base_2[0] = false
return a+b*c-d
};
var argument10 = r_2;
var argument11 = true;
var argument12 = 2.5055505851432373e+307;
var argument13 = true;
var argument14 = r_2;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[6.35085648319999e+307] = null
return a/b/c+d
};
var base_0 = [618,714,403,157,-1,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,714,403,157,-1,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,714,403,157,-1,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,714,403,157,-1,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test268.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)