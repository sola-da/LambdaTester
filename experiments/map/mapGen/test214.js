





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9.869573703797622e+307] = 1.5946355338392364e+308
base_0[8] = [893,49,-1,126,460,100,59]
return a*b-c
};
var argument2 = "gn";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = [100,25]
base_1[1][4] = 655
argument5[893] = false
return a+b/c
};
var argument4 = true;
var argument5 = "B|";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[893] = ""
base_2[8] = ""
argument6 = "G"
return a+b-c
};
var argument7 = ["1",705];
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7][2] = null
argument10[5] = [705,-1,783,893,460]
argument10[5] = {"0":1.2728969013871833e+308,"460":1.7061364217676174e+308,"705":4.818095222587679e+307,"783":49,"4.710917414662172e+307":242,"1.3435829872183634e+308":"p ","AA@":"","L&":""}
return a+b-c
};
var base_0 = ["Gy?","i","|)","H"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test214.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)