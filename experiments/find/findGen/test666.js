





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['^h'] = true
argument2[5] = ""
return a-b*c
};
var argument2 = "";
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = ""
argument5[1] = true
argument6[403] = 5.328913700369102e+307
return a-b+c
};
var argument5 = 823;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['^h'] = ""
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = null
argument8[242] = false
argument9['!j'] = {"25":"","59":2.7395933344397824e+307,"157":"$JH","618":59,"":1.7495650663041995e+308,"?":82,"pP=N":59,"dx":"h","{ZY":"r#"}
return a-b+c
};
var argument8 = 100;
var argument9 = null;
var base_0 = ["Rr","Aj","N@!","o","-5=","p","jK<mj"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Rr","Aj","N@!","o","-5=","p","jK<mj"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Rr","Aj","N@!","o","-5=","p","jK<mj"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Rr","Aj","N@!","o","-5=","p","jK<mj"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test666.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)