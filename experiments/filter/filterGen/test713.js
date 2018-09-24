





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = true
base_0[0][5e-324] = null
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['!cck7Mm'] = -100
argument3[0] = ""
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[618] = null
argument4[3.0481490052276395e+306] = 100
argument4[4] = {"25":1.7476624403317373e+308,"49":49,"969":"","":"","2.174451356680403e+307":"8","6.949822510925519e+307":1.5356789988074756e+308,"X":"Oi+","1.1165163202410832e+308":1.635500541066711e+306,"1.2910446072564264e+308":"v;"}
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[242] = [100,59,1.7976931348623157e+308,403,213,122,655]
base_3[1][0] = {"893":"$","":2.8071189861841354e+307,"1.4237212601690433e+308":"","E2":"","J":"","1.4713191778029917e+308":"","c ":"]t","1.0692493945149647e+308":"","-100":7.974818613481745e+307,"DQ":59}
argument5['c'] = [213,0,"^dp","X&:",242,403,"|"]
return a*b+c
};
var argument5 = null;
var argument6 = true;
var base_0 = ["FrKr","4","j"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["FrKr","4","j"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["FrKr","4","j"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["FrKr","4","j"]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test713.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)