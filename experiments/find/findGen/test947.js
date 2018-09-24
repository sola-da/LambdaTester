





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][6] = [969,0,823,"Gs-"]
argument2[1.399309004356655e+308] = 1.6599127565791688e+308
argument2[-1] = true
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = ["%","C"]
argument3[3][6] = {"6.798098696036065e+307":823}
argument2[893] = {"":"","1.462666062280213e+308":"xM"}
return a-b*c
};
var argument3 = false;
var argument4 = {"126":4.613569758849134e+307,"607":"u","-1":"2H<","":25};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 1.7019762214390235e+308
base_2[3] = -1
argument6 = true
return a+b+c
};
var argument6 = null;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['!j'] = ""
return a/b*c
};
var base_0 = [1.7976931348623157e+308,59,1.7976931348623157e+308,25,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,59,1.7976931348623157e+308,25,213]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,59,1.7976931348623157e+308,25,213]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,59,1.7976931348623157e+308,25,213]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test947.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)