





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["p#v",":0","u","F"]
argument2[7] = null
return a+b*c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = r_1;
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = "uI;"
argument5[25] = ["l","F","Ss","#","F"," +"]
return a-b/c-d
};
var argument8 = true;
var argument9 = true;
var argument10 = "K";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['Cb'] = 607
base_2[1] = false
argument8[0] = [705,714,100,82,714]
return a+b/c*d
};
var argument12 = r_1;
var argument13 = r_1;
var argument14 = "";
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['Cb'] = null
argument12[2.1869172855352885e+307] = {"25":1.6383231046336024e+308,"3.617147928317779e+307":8.301525959199035e+307,"5e-324":893,"PS":",","1.374832439334367e+307":"","6.403185514892485e+307":8.546485767235842e+306}
return a-b/c*d
};
var base_0 = ["2-<","&u","$:","f^-=","S","]"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2-<","&u","$:","f^-=","S","]"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2-<","&u","$:","f^-=","S","]"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2-<","&u","$:","f^-=","S","]"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test261.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)