





var callbackArguments = [];
var argument1 = null;
var argument2 = 1.0349787899236097e+308;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"25":213,"893":49,"":"IJ","2.4424343575449073e+307":"","@m9<":"F7","3.8626157741408814e+307":"wpt","S71a":213,"1.7976931348623157e+308":"","eX&nE":122}
return a*b/c+d
};
var argument5 = null;
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1277822633002616e+308] = false
argument5[0] = ["X",969,705,213,126,714,"@zP5",")%","7","U"]
return a/b+c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = "D"
argument9['s'] = true
argument9[126] = {"59":1.183878909628012e+308,"s":705,"z":"D","":""}
return a-b+c/d
};
var argument10 = 5.9383870981042e+307;
var argument11 = false;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = 1.6837976773532607e+307
return a*b*c-d
};
var base_0 = ["qx","i","+PkUg","P^","Uw","W<QzH#On",":9","-S",">"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["qx","i","+PkUg","P^","Uw","W<QzH#On",":9","-S",">"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["qx","i","+PkUg","P^","Uw","W<QzH#On",":9","-S",">"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["qx","i","+PkUg","P^","Uw","W<QzH#On",":9","-S",">"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test786.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)