





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {"122":6.646794152788689e+307,"403":460,"595":460,"607":"","655":213,"1.5984500432513952e+308":655,"*":1.4567369605950639e+308,"S=":8.181275324979222e+306,"^1L":1.6414989713475345e+308,"":607}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = {"122":"k","":""}
return a-b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = "rw"
base_2[5] = null
base_2[5] = {"618":"Fn","":-100,"1.7976931348623157e+308":"*","6.273761714418071e+307":893,"8.648006311092279e+307":"oMV","2.2536728476945566e+307":"w"}
return a+b/c
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"":1.271172144552869e+308,"4.0404645834589126e+306":1.6430304994978291e+308,"2.1201794590047692e+306":"","6.275176826104927e+307":")k"}
base_3[8] = {"":"","1.204477070740724e+308":"","n":627,"8.786098120522511e+307":""}
return a+b/c
};
var argument7 = false;
var base_0 = ["!",627,"$"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!",627,"$"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!",627,"$"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!",627,"$"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test25.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)