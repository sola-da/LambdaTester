





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9] = ")"
base_0[1]['{X'] = 7.369346658902254e+307
base_0[6] = [714,-1,969,969,460,705,595]
return a*b*c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[122] = {"":"","Pi":"!(","1.1863434190231078e+308":969,"1.5995292149482602e+308":"n}","Hi":893,"1.0899125902913378e+308":1.232591035348619e+308,"L":126,"lg":"3"}
argument4[9] = {"|":705,"c":82,"3.2806742589910566e+307":9.584040523606462e+307,"1.3860781638385954e+308":8.684004276868834e+307,"":"","1BYA|":"","3.080702608826817e+305":4.799280481693837e+307,"7.556648381429206e+307":1.3775205107334121e+308}
argument4[2] = {}
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = [59,893,893,705,705,893,969,714]
argument5[0] = null
return a+b+c
};
var argument5 = 783;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2.249941463060761e+307] = 1.7288817459355237e+308
return a/b*c
};
var argument8 = "C";
var argument9 = r_0;
var base_0 = ["qY@JS{(,s"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["qY@JS{(,s"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["qY@JS{(,s"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["qY@JS{(,s"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test296.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)