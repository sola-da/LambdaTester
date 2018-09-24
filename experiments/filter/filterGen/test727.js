





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = [893,59,969,"R",403,1.7976931348623157e+308,")",893]
return a-b-c
};
var argument2 = null;
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = 705
argument6[4] = {"82":"p!)","122":7.282946438732406e+307,"783":705,"gT":460,",Z":6.328711167322708e+307,"":1.7796705461753564e+308,"pK":"BL","0is*?":823,"1.399763580551872e+308":4.7162959698809974e+306}
return a-b-c
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8][3] = 1.520451390830798e+308
return a+b+c
};
var argument8 = {"627":"","893":"h^w","Nc&NXI":"s","":"","6.353482129003912e+307":"","1.355683460249241e+308":""};
var argument9 = "";
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['filter'] = "+F"
return a/b/c
};
var base_0 = [893,25,122,0,242,460,969]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25,122,0,242,460,969]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25,122,0,242,460,969]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25,122,0,242,460,969]
var r_3= undefined
try {
r_3 = base_3.filter(argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test727.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)