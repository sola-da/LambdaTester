





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['n,5s@s'] = ["2","?xKE","{yH"]
argument2[1] = 1.1533327340881355e+308
argument2[-100] = "YU"
return a+b-c
};
var argument2 = {"823":"","":3.2105472147493095e+307,"1.7112838182700878e+308":607,"2.1809100433670638e+307":595,"4.435172083576355e+307":1.3808720152036936e+308,"K*":"C"};
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['#R[+'] = ""
base_1 = 25
return a*b*c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = null
argument7[0] = ""
argument8[0] = {"":"","2.1885078422496723e+307":655}
return a/b/c
};
var argument7 = r_0;
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.377960715099946e+307] = null
argument10[3.0481490052276395e+306] = [59,-100,607,-100,823,655,126]
argument10[8] = false
return a-b*c
};
var argument10 = null;
var base_0 = ["60*","0h","N","LP","P4l","+","F"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["60*","0h","N","LP","P4l","+","F"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["60*","0h","N","LP","P4l","+","F"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["60*","0h","N","LP","P4l","+","F"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test988.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)