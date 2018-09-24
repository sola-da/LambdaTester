





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['L'] = {"4":4.603961993147341e+307,"25":4.988653490951059e+307,"157":"","b!&":"","%Y":"","@r":""}
argument2[8] = {"783":"w6n:p","893":618,"d":"","iRt":"W7","":"","1.2826849794579375e+308":"4","4.1063585818362244e+307":"","4.369091448189436e+307":""}
argument2[1.1207829086460726e+308] = false
return a-b*c+d
};
var argument2 = true;
var argument3 = {"100":"HE?^s","969":6.077209543887706e+307,"5K":100,"1.2743434279508294e+308":"{","":"Q","1.8888419016995243e+306":"","1.2426786180793652e+308":"","A T":607};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[25] = null
argument4[1] = true
return a*b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['^N'] = {"":1.496214024263841e+308,"#'":1.0759854979233845e+307,"1.935175089108572e+307":"%"}
argument7[0] = {"7":655,"59":242,"627":893,"":"","5.318221393307829e+307":9.188987920148072e+307}
argument7[62] = null
return a*b*c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = {"157":"","823":1.6714701195774257e+308,"893":213,"":783,"OY[":49,"1.1873852309376768e+308":1.784723620624525e+308," Y":783,"1.3880228469637509e+308":1.1427870450524145e+308,"1.2447703044989554e+308":126}
argument7[8.575765443877852e+307] = null
return a-b+c/d
};
var base_0 = [0,714,49,59,82]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,714,49,59,82]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,714,49,59,82]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,714,49,59,82]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test891.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)