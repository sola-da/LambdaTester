





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = 82
return a-b-c
};
var argument2 = null;
var argument3 = "W<oOw4w";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = 655
argument6[122] = null
argument6[1] = "$J"
return a/b/c
};
var argument5 = {"25":1.4200867617549088e+308,"":49,"f9zgt4n!ZJR]W":"","7.205913569940155e+307":"","<":6.639855487688099e+306,"-":"","1.0688110498714917e+308":4.823447194317783e+307};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = null
argument8['f'] = false
base_2[2] = {"8":"Ue2","*":"1bWM73","1.3230002697056079e+308":1.5051681627305305e+308,"":"","4.0500757018696177e+307":"","!g4":1.0771575138583462e+308,"1.2388897502938876e+307":"","Mc;":"<"}
return a*b*c
};
var argument8 = [25,59,403];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][5e-324] = ["F"]
base_3['length'] = null
return a-b-c
};
var base_0 = ["Q?","g"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q?","g"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q?","g"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q?","g"]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test374.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)