





var callbackArguments = [];
var argument1 = r_0;
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = [")O","h{qnx","{$p`T","?","t"]
argument1[2.1869172855352885e+307] = null
argument2[1.1277822633002616e+308] = null
return a/b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"122":893,"=r>I":"77L!","":"","[":"","1.300084349654927e+308":655}
return a+b*c-d
};
var argument6 = false;
var argument7 = "9";
var argument8 = r_2;
var argument9 = null;
var argument10 = {"783":242,"":"n(:","@":893,"8.632761298071421e+307":242,"3.4429645317548083e+307":"!+V","S":2.0625510375405084e+307,"1.4307839945916214e+308":618,"M":"","-1":"h","6c!":""};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = true
argument8[2.1869172855352885e+307] = 618
argument10[2] = true
return a-b+c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[0] = true
base_3[6] = {"0":"[J[m","82":969,"157":618,"969":"","5.845829274609121e+306":"","2.1471019654663102e+307":"","e":9.895294639369108e+307,"":"ff","B18":""}
argument13[4] = null
return a-b+c-d
};
var argument13 = r_0;
var base_0 = [59,783,843]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,783,843]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,783,843]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,783,843]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test205.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)