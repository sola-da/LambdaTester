





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1] = 1.7976931348623157e+308
base_0[0][6] = true
base_0[1][2] = 2.926313657504095e+307
return a+b+c
};
var argument2 = {"460":969,"1.185843629804185e+308":213,"W":655,"":"","Fr":1.4265568782802065e+308,"5e-324":"","p":"1"};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['io'] = {"1.7976931348623157e+308":2.1681839796585799e+307}
argument5[1.3599216339661573e+308] = {":[":"","":"k","1.1643509392830561e+308":"`8"}
argument5[2] = ["I<","R","h",82,"}<Z>"]
return a/b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = {"242":2.822107208299013e+306,"1qH%":"s","":"B","9.046581384249556e+307":9.294296120015325e+307}
return a+b+c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = null
base_3[2] = [705,627,595,655,714,5e-324,157,25]
return a-b-c
};
var base_0 = [5e-324]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test540.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)