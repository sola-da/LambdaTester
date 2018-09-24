





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = "w"
base_0[0][1] = null
return a-b/c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.399309004356655e+308] = 8.852738073735425e+307
argument6[100] = {"618":"","783":783,"843":"","":"|","n*":59,"a":1.4007050683641822e+308,"z<4":""}
base_1[0][1] = {"126":"","242":"*>#","783":893,"1.689495336215743e+308":"[","":"","1.4091397437066827e+308":"","1.325727814780353e+308":2.2591788626060755e+305,"y1":"","1.422868092544328e+308":"=Vs8","1.5251153960460016e+308":1.6005409529284827e+308}
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[100] = [618]
argument7[6] = ""
argument6[1.399309004356655e+308] = true
return a-b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8][0] = "7)"
argument7[3.7668525981726295e+307] = {"627":"","":1.2402164714311106e+308,"4.912018279662885e+307":3.302857819971205e+307,"H":1.7976931348623157e+308}
return a*b+c
};
var argument7 = r_3;
var argument8 = null;
var base_0 = ["4kdK","t,RRX"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4kdK","t,RRX"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4kdK","t,RRX"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4kdK","t,RRX"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test261.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)