





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = ["&","6"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = true
argument2[213] = {"122":"zvQ","242":1.6829422222318822e+308,"969":823,"S":25,"|?":1.7635310520417641e+308,"":8.344626770522465e+307,"4.497122282225607e+307":4.174429261539272e+307,"1.248228897412291e+308":655,"1.586274256015856e+308":893,"fZ*":""}
return a*b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = 1.780519836891859e+308
argument5[1] = ""
return a+b-c+d
};
var argument6 = 460;
var argument7 = [607];
var argument8 = {"59":4.056061686404903e+307,"82":"EX,i","157":"&D","213":5.494670128852627e+307,"595":"","1.7459809759597144e+307":2.8623884465813727e+307,"1.1669586827651068e+308":"","1.633000214035662e+307":"}K","1.4766037455710906e+308":"=","1.646876412796673e+308":242};
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9] = 49
argument9[1.359136872727139e+308] = true
argument8 = true
return a-b*c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['*c'] = 1.3006169801842902e+308
return a+b/c/d
};
var base_0 = [705,"H","M!",893,242,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,"H","M!",893,242,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,"H","M!",893,242,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,"H","M!",893,242,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test548.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)