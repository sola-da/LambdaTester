





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][3] = {"627":783,"705":"","1.2409377008756694e+308":1.3056763986702034e+308,"$CN{":403,"O":"YA0","":"","W":49}
base_0[0] = [100,714,460,783,126]
argument2[4] = "kC"
return a/b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[49] = 2.563882964424364e+307
argument4[1.6177106033227046e+308] = ")"
argument4[969] = 3.017303895835011e+307
return a+b*c
};
var argument4 = [242,59];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['f'] = 1.7086590605567908e+308
return a+b+c
};
var argument6 = true;
var argument7 = [783];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[618] = "q"
argument10[1.0546776681946723e+308] = 1.0662490825171344e+308
return a/b-c
};
var argument9 = ["{VM$",122,126];
var argument10 = null;
var base_0 = [823,843,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,843,893]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test764.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)