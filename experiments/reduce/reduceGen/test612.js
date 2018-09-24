





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = {"2":618,"c_":1.7702162786566768e+308,"":" ","1.3698388226565846e+308":""}
argument1[1] = {"[t3zu[":460,"Rk":5.647878434348352e+307,"<":"2"}
base_0[1] = [618,122,126,893,242,-1,82,213,655]
return a/b-c-d
};
var argument2 = "r";
var argument3 = true;
var argument4 = null;
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = [100,82,607,49,122,59]
argument6[6.35085648319999e+307] = 49
return a*b+c+d
};
var argument8 = null;
var argument9 = false;
var argument10 = 242;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7.889879335222838e+307] = 49
base_2[8] = [403,49]
return a+b-c/d
};
var argument12 = 1.0096994831499041e+308;
var argument13 = true;
var argument14 = true;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[595] = null
base_3['length'] = [1.7976931348623157e+308,627,460,823,893,5e-324,403]
return a+b*c*d
};
var base_0 = ["p","y d","y:1|","EL:","Ywu$G","e","A#o","7iLl","@"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["p","y d","y:1|","EL:","Ywu$G","e","A#o","7iLl","@"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["p","y d","y:1|","EL:","Ywu$G","e","A#o","7iLl","@"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["p","y d","y:1|","EL:","Ywu$G","e","A#o","7iLl","@"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test612.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)