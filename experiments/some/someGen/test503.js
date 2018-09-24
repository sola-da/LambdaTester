





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = 2.0054056865552298e+307
argument2['j'] = {"":4.912687227809369e+307,"7.214954458231795e+307":5.449172869423547e+307,"1.2402166439821997e+308":"","1.62372344062075e+308":2.0133222606420238e+307,"2.111684696768346e+307":"","1.7976931348623157e+308":"(+"}
argument2[157] = ""
return a-b/c
};
var argument2 = [213,122,100,618,460,655];
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 6.703227214319074e+307
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 969
argument7[403] = {"157":705,"242":"","1.0584366350101787e+308":"","":5.692387088121415e+307,"U":"z","t":"","5S":"W&","1.229894863719738e+308":"q*"}
return a*b+c
};
var argument6 = "Lev<[2CoSQ";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = "J"
base_3[2] = {"L":893}
return a-b*c
};
var argument8 = 460;
var base_0 = ["(","S}-","t",";","?","7|Fa=z_"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","S}-","t",";","?","7|Fa=z_"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(","S}-","t",";","?","7|Fa=z_"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(","S}-","t",";","?","7|Fa=z_"]
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
require("fs").writeFileSync("./experiments/some/someGen/test503.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)