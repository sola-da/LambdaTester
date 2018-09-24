





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"122":7.837640124525268e+307,"c!^":"","?B7":"F"}
base_0[1][2] = [969,1.7976931348623157e+308,714,0,25,595]
argument2[9] = null
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"126":"!","7.118180387578227e+307":"Aa","5.483904196266481e+307":-1}
argument4[9.551053197482062e+307] = null
base_1[2] = ["d"]
return a*b+c
};
var argument3 = {"157":"Z&^3","969":1.651197881357548e+308,"1.3369321471750272e+308":"UY","":1.3296451658319568e+308,"8.187082710592096e+307":1.7937160755510878e+308,"3.243314552009661e+307":""};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 1.1595857678506822e+308
argument7[7] = null
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = true
base_3[0] = true
base_3[1]['{X'] = [0,100,0,25,783,783,25,213]
return a-b+c
};
var base_0 = [242,705,157,595]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,705,157,595]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,705,157,595]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,705,157,595]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test330.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)