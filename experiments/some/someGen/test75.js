





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = ""
base_0[3] = true
argument2[1.6798476101238045e+308] = ["r","F","E","r","TLMRiuz","Z4S",");]^","W,u$-^"]
return a-b/c
};
var argument2 = {"126":705,"213":"b","460":"?","823":714,"":1.5471405562336952e+308,"1.473252768475462e+308":"+","Y?>4":"d^@"};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][0] = null
base_1[1][8] = ["8y2"]
argument5[618] = "QD"
return a-b/c
};
var argument5 = 714;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = 3.095278779408131e+307
return a*b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"595":"","9.364118021449204e+306":157,"Su":"'","":"","u":1.5745827602378453e+308,"6.165520825114779e+306":"YO","6.330459348552803e+307":9.698492729232685e+307,"1.2803117002004353e+308":1.5352238233551495e+308,",g":4.318802207124417e+306}
return a+b*c
};
var argument8 = r_1;
var base_0 = [893,25]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test75.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)