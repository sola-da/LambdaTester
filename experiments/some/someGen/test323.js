





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"100":"","595":100,"":"","1.023273150186547e+308":1.4816625627170622e+308,"k6C":1.1886295413437096e+308,"r`B9":4.1651983392246496e+307,"1.4716050275788094e+307":-1}
argument1[0] = true
base_0[2] = "f#"
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = [705,460,823,627,843,-100,403]
argument3['f'] = {"0":"(","9":100,"595":"","EQ7":7.901638545569321e+307,"":"","<":6.334086339907712e+307,"rk":4.734302564366611e+307,"r":" Ve","&t":8.660069877766304e+307,"4.0648041209902273e+307":""}
return a/b-c
};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.6798476101238045e+308] = true
argument6['5L'] = ["3(",";"]
argument7['T'] = 1.4185793124792018e+308
return a-b+c
};
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][5] = [">",157]
base_3[2][5] = true
argument9[3] = true
return a*b+c
};
var argument9 = null;
var base_0 = [969,655,0,157,843,0,460,49,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,655,0,157,843,0,460,49,607]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,655,0,157,843,0,460,49,607]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,655,0,157,843,0,460,49,607]
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
require("fs").writeFileSync("./experiments/some/someGen/test323.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)