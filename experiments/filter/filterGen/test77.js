





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][7] = null
return a-b+c
};
var argument2 = {"82":"XZU","-1":"","":783,"IP":"6X","d":213,"4.2473113159593213e+307":1.7976931348623157e+308,"X":"]","1.1679954109349114e+308":0};
var argument3 = 122;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = {"49":1.2755512755417156e+307,"":1.015071635404229e+308,"|3":893,"U":1.268960746638557e+308,"gO":"K","S&>N":82,"5.042737251732223e+307":823,"6.512582574059422e+307":213}
base_1[5] = 1.3166447892776433e+307
return a*b/c
};
var argument5 = ["gp;","2","@8"];
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = {"25":213,"403":"kRy","607":460,"627":"rQ","705":4.505488324288652e+307,"":59,"1.4611289304110669e+308":7.832944857437824e+307,"Y":"","k":"","T|":"w"}
argument8[6] = ""
return a-b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][2] = null
base_3[3][0] = 7.504464060183964e+307
argument9[3] = ""
return a+b*c
};
var argument9 = 122;
var base_0 = ["B","Pz","E","0"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B","Pz","E","0"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B","Pz","E","0"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test77.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)