





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [714,655,969,655,-100,607,618,607,213,49]
base_0[8] = ""
argument2[4.960033715165713e+307] = [-1,618,-100,607]
return a/b/c
};
var argument2 = {"82":714,"":"y","1.4548368406226186e+308":"d","9.840448618809173e+306":7.659337744167612e+307,"y|":1.1316913082744721e+308,"F":126,"1.7380993708293174e+308":"","1.1253412491040125e+308":9.642433251927089e+306,"1.0567050988550038e+308":""};
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['sJRZP'] = "-e"
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = false
return a/b+c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[122] = {"25":"b","49":82,"607":"",";":4.467515706878615e+307,"5.421591035784027e+307":"Bf","4.502982926170621e+307":""}
return a*b+c
};
var base_0 = ["%y","E","g","5","PO|7","8","9X","(","J","5&SSF"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%y","E","g","5","PO|7","8","9X","(","J","5&SSF"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%y","E","g","5","PO|7","8","9X","(","J","5&SSF"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%y","E","g","5","PO|7","8","9X","(","J","5&SSF"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test511.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)