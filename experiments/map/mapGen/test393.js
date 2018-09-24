





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['C'] = ["C","!Z","hB(}d9m","-","]","U"]
argument2['C'] = false
return a/b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = "o"
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = 1.4015506741149035e+308
base_2[2] = [1.7976931348623157e+308,893,460,969,1.7976931348623157e+308,714,59,213,460,595]
base_2[3][3] = {"2":627,"25":"I]b","1.6407301047935065e+308":"r","":"o2GO8","C":"7","&":1.2805750072673264e+308,"@":595,"4.908843433286807e+307":893,"1.8856774644553498e+307":"","8,i":1.7452871288057225e+308}
return a*b*c
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1.4677087964888306e+308] = 4.680309625749694e+307
base_3[7] = "=-mQ"
base_3 = ""
return a+b+c
};
var argument8 = false;
var base_0 = [618,100,-1,714,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,100,-1,714,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,100,-1,714,-1]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test393.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)