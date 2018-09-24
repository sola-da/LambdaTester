





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = {"242":"D","":"","&":"","@U":595}
return a*b+c
};
var argument2 = "";
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7.82874486699946e+307] = {"126":705,"595":"y","%":"m","1.4421788916993718e+308":"","i0":783,"":82,"I1*":1.052333866189413e+308}
argument6 = null
argument5[1.1679954109349114e+308] = null
return a*b*c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = ["Pk","-",5e-324,-1,"s",25,"k^jE>","g;E"]
argument7[893] = null
base_2[1][3.5329845145600404e+307] = "4"
return a*b*c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['T'] = null
argument9[1.7847438319683965e+308] = [460,1.7976931348623157e+308,49,595,618]
return a/b+c
};
var argument9 = r_0;
var argument10 = 655;
var base_0 = [893,-1,627,893,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-1,627,893,122]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-1,627,893,122]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test894.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)