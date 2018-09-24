





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = null
base_0[0][5e-324] = ["ZUUFoMN6","N","o"]
argument2[1] = {"Jegx":969,"M":"","7.536227470676309e+307":"9"}
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5.262931091360336e+307] = null
base_1[0] = null
argument3 = false
return a-b+c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = 8.5427536218543e+306
argument6[-100] = ""
base_2[6] = ""
return a-b+c
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][0] = 403
base_3[8] = false
argument8['A'] = {"i":59,"":705,"6.019504428165783e+307":5.207614748987645e+307,"6.201153422039201e+306":"","8.207833640839383e+307":"-","1.4804344884196164e+308":""}
return a+b-c
};
var argument8 = true;
var argument9 = r_3;
var base_0 = [126,100,59,783,-100,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,100,59,783,-100,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,100,59,783,-100,607]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,100,59,783,-100,607]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test90.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)