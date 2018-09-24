





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = ""
base_0[0] = 25
return a*b-c
};
var argument2 = {"49":403,"6.343141848325443e+307":""};
var argument3 = {"157":"'","843":1.253324701062324e+308,"969":8.309682072656195e+307,"zZ":9.83610973280476e+307,"D":"u","zf":"","PgL8;;12@:@6":1.7976931348623157e+308,"":"","JH":2.7169071965688056e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = false
argument5[9] = 1.3299353448153026e+308
return a+b*c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = null
argument7[6] = [893,-1,714,59,126,1.7976931348623157e+308]
return a/b+c
};
var argument7 = {"969":126,"f<5":1.7976931348623157e+308,"":59,"0N":"","UPxY4":1.5856764194370627e+308,"1.2314614140161055e+308":"","^N":"","7.292240291600865e+307":">U9R","A":""};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4.224481734419934e+307] = 4.503561323495315e+307
argument9['f!BO'] = ""
return a*b*c
};
var base_0 = ["2",705,122,"&r","TsH;&"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2",705,122,"&r","TsH;&"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2",705,122,"&r","TsH;&"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2",705,122,"&r","TsH;&"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test762.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)