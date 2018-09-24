





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = true
return a-b-c
};
var argument2 = 1.6969068263858256e+308;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = "D"
return a/b*c
};
var argument4 = null;
var argument5 = {"618":"IYb","":"","1.4744166731512243e+308":1.3432939283903954e+308,"1.3656478836686215e+308":403,"1.490751386069293e+308":"","4.897787149979069e+307":9.701435121940322e+307};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = 9.203043301048724e+307
base_2[0][1.4677087964888306e+308] = {"0":2.898843959744583e+307,"82":49,"157":1.5663088959992427e+306,"627":"+","1.502378480797836e+308":49,"5e-324":5.383445307900355e+307,"":1.2694682805808457e+307,"#M":"","1.4689062777423582e+308":""}
argument7[5] = null
return a-b*c
};
var argument7 = r_2;
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = false
return a*b*c
};
var argument10 = {"49":"s<t","607":59,"714":"","":714,"1.1481896906750974e+308":7.759870510041285e+307,"O":7.488291566363502e+306,"1.5217171167531933e+308":82};
var base_0 = [25,705,-100,969,-100,-1,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,705,-100,969,-100,-1,157]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,705,-100,969,-100,-1,157]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test536.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)