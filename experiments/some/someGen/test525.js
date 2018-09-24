





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = {"607":783,"1.0490172565393485e+308":"Q","3.8274818675811556e+307":1.493043278122222e+308,"":595,"3.090279759527732e+307":1.1035993338551105e+308,"9.781322029579529e+306":1.4153237928290117e+308,"2L":607}
return a*b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = false
argument4['f'] = 157
argument5[3] = {"X":"","":"Bp","1.3284771411972544e+308":"","e":655,"o":126,"U":627}
return a-b-c
};
var argument4 = r_1;
var argument5 = 6.504920644098549e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = {"403":"","969":7.091503996897008e+307,"":1.3503577794449654e+308,"8.65109445284467e+307":"","9.135682968115283e+307":59,"3.4583853161465346e+307":122,"-100":1.4998015101469285e+308,"S":1.047663599511945e+308}
base_2[4][7] = null
base_2[3][3] = {"9":"N","126":"!","843":783,"1.504185674237413e+308":"-","":"","1.0184236154009067e+308":242,"1.4807431570018182e+308":893,"9O":49,"Q":2.1272489182218515e+307,"9.626170891584097e+306":1.2919916362181593e+308}
return a-b+c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = 2.9880268671019305e+307
return a+b+c
};
var argument9 = r_0;
var base_0 = ["J>","o&b","P","}","4s","h,_","yn("]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J>","o&b","P","}","4s","h,_","yn("]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J>","o&b","P","}","4s","h,_","yn("]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J>","o&b","P","}","4s","h,_","yn("]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test525.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)