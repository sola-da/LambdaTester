





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.2537850866485212e+307] = {"122":"vxp]","157":"tY","969":403,"oK":1.0094985092356157e+308,"-":"","P":"","-1":9.978299360040696e+307,"Baj":714}
base_0[3][1.3434821406183095e+308] = [242,122,1.7976931348623157e+308,823,-100,-1,157,25,242]
argument3[5.262931091360336e+307] = 460
return a*b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-100] = 1.7336061045095313e+308
argument5[1.1679954109349114e+308] = 25
argument6[5] = {"82":8.424780862500706e+307,"100":1.1834083841601277e+308,"242":"`","":3.666444914131809e+307,"1.3884302730272398e+308":157,"6.813784185741731e+307":"w","4fk":"Z","hXT":618,"1.3916272773255564e+308":-100,"=":1.1020106163079041e+308}
return a+b-c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.2537850866485212e+307] = null
return a-b*c
};
var argument7 = 403;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = ["a","G"]
return a+b*c
};
var argument9 = "[L";
var base_0 = ["tQ{",")","f","&","BB"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["tQ{",")","f","&","BB"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["tQ{",")","f","&","BB"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["tQ{",")","f","&","BB"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test860.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)