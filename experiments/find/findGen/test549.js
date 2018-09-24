





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = false
base_0[1][0] = null
return a*b+c
};
var argument2 = [59,157,705,100,403,242,213,705];
var argument3 = "(]WBt";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.7668525981726295e+307] = {"126":1.004223333276632e+308,"893":"","969":"H","":"","1.7976931348623157e+308":";ig","1.5348759895509047e+308":"#","4.342173692047065e+307":"5","K":"Z"}
return a/b/c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = {"100":"","157":59,"595":6.347482611113287e+307,"618":"","823":8.625881296167539e+307,"2.2239453473862034e+307":9.774056308153143e+307,"":" ","7.575893632183418e+307":893,"1.3832554214164672e+308":9.70229263066892e+307,"2.9588821738481764e+307":""}
base_2[2] = null
return a*b-c
};
var argument7 = 4.493522018537746e+307;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = ["bm{","G<","Aq"]
argument9[1.399309004356655e+308] = ["sD","^","?&)",":"]
return a*b*c
};
var base_0 = [714,213,843,1.7976931348623157e+308,126,403]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,213,843,1.7976931348623157e+308,126,403]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,213,843,1.7976931348623157e+308,126,403]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,213,843,1.7976931348623157e+308,126,403]
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
require("fs").writeFileSync("./experiments/find/findGen/test549.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)