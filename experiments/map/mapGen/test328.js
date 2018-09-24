





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = {"122":7.837640124525268e+307,"c!^":"","?B7":"F"}
base_0[1][7] = [969,1.7976931348623157e+308,714,0,25,595]
argument2[893] = null
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"126":"!","7.118180387578227e+307":"Aa","5.483904196266481e+307":-1}
base_1[5] = null
argument4 = ["d"]
return a*b+c
};
var argument3 = {"157":"Z&^3","969":1.651197881357548e+308,"1.3369321471750272e+308":"UY","":1.3296451658319568e+308,"8.187082710592096e+307":1.7937160755510878e+308,"3.243314552009661e+307":""};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = 1.1595857678506822e+308
argument6[5] = null
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['A'] = true
argument7[3] = true
argument7[969] = [0,100,0,25,783,783,25,213]
return a-b+c
};
var base_0 = [242,705,157,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,705,157,595]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test328.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)