





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {"627":"w","783":8.411373661824157e+307,"893":"","":893,"1.4191696757103295e+308":1.3113734304094844e+308,"8.689907490699425e+307":4.94090890107551e+307,"1.7567139937649756e+308":"y^>"}
return a+b*c
};
var argument2 = {"":705};
var argument3 = -100;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = null
argument4 = {"122":"","403":9.076216511320155e+307,"7.473139194885047e+307":1.6165568707789646e+308,">":"8","":7.688850042735721e+307,"-100":"("}
argument5[49] = null
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1.4677087964888306e+308] = ["I<","4E"]
argument7[6] = null
return a/b/c
};
var argument6 = {"":"lo","4.500584029542636e+307":"","';6":"","1.4892556739557607e+308":"","n":9.95096299958929e+306,"#=":"","*":0,"1.7976931348623157e+308":"","1.279765668164094e+308":25};
var argument7 = [705,714,595,783];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = false
return a*b-c
};
var argument9 = false;
var base_0 = ["&I+","o","N","XH","#","-","f",",","r7"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&I+","o","N","XH","#","-","f",",","r7"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&I+","o","N","XH","#","-","f",",","r7"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test425.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)