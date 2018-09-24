





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = ["kLV","O%","la","x"]
argument2[6] = "pC"
return a*b-c+d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = {"7":1.705571051463849e+307,"122":"pX#","126":"cV","655":"4","1.6358288991393835e+308":"","":"","8.93706074488015e+307":8.649508731420402e+307,"5pji-Y":"","KlI":""}
argument5[0] = 893
return a-b*c+d
};
var argument5 = null;
var argument6 = {"783":"O,T","3.99339138029323e+306":"-","zq":3.2638879573604814e+307,"Rt":"e:","":6.498666577931306e+307,"$y'cvwLCTjc&":"","=":8.463981804291328e+307,"M5":""};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = [59,122,403,-1,122,157,618,627]
argument8[2] = false
return a-b+c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = true
argument9['v'] = {"0":"l{M","25":"","655":",hUib0T&l","6.911503880592441e+307":"","":"","2.83802297487291e+307":100,"1.811833524626497e+307":893,"1.7976931348623157e+308":"","8.806582808173565e+306":"","Q09":""}
argument10['T'] = 126
return a+b+c+d
};
var base_0 = [627,126,-1,595,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,126,-1,595,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,126,-1,595,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,126,-1,595,126]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test790.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)