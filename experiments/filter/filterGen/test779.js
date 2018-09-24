





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-100] = null
base_0['filter'] = {"5.237271851409815e+307":""}
argument2['7q('] = 607
return a*b+c
};
var argument2 = null;
var argument3 = ["Jb8",1.7976931348623157e+308,618,"n",126,59];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"157":"!","h'7o":""}
argument5[4.224481734419934e+307] = ["@","|Lh","!j","I"]
argument4 = false
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0546776681946723e+308] = ["Lv","?Eb","z[iU","J","jOx","s"]
argument6['A'] = 460
argument6[3] = [705,82,783,5e-324,59,823]
return a/b-c
};
var argument6 = false;
var argument7 = {"705":893,"}":"I^x","`":"","J":"5","":"2Qv","wg":59,"3.85647008878181e+307":"","iI6@fL":"^$R5"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = 2.0562805491658233e+307
argument10[3] = "a^1"
base_3[7] = 59
return a+b/c
};
var base_0 = [969,-1,893,122,714,655,0,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,-1,893,122,714,655,0,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,-1,893,122,714,655,0,607]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test779.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)