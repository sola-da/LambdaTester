





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 1.3631181806302625e+308
argument2[618] = null
base_0[4][7] = null
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7.004668712060429e+307] = true
argument3['k<7bJ'] = ["u",157,100,893,"m"]
argument3[6] = null
return a+b+c
};
var argument3 = r_0;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = "V"
base_2[1] = {"0":"","893":"","5.4143924255359766e+306":1.0204907758135436e+308,"N":969,"1.0757779751393317e+308":"","2.400324396028558e+307":714,"1.832060785626497e+307":1.1945329604829922e+308,"":"d","2.6323744499367724e+307":"","-1":1.448087686768885e+308}
argument7[1] = {"460":"2","627":25,"":-1,"=":714,":":705,"1.7613354102348076e+308":714,"2.084147905666802e+307":"!","6.32061962197194e+307":"","m":"**p%","WO":8.324225060469998e+307}
return a/b*c
};
var argument6 = 893;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[122] = 6.380100563834314e+307
return a/b/c
};
var argument8 = {"25":"","Gq":25,"":"mY","n":595,"aA":"sq"};
var base_0 = ["2u","?w","+K[P","1W","9"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2u","?w","+K[P","1W","9"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2u","?w","+K[P","1W","9"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2u","?w","+K[P","1W","9"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test673.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)