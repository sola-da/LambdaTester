





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = ""
base_0[1][4] = null
argument2[1.1881593224845412e+308] = null
return a/b*c
};
var argument2 = true;
var argument3 = 4.796821997506193e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = {"122":"","126":"eUt<@Tl0e","":"=","8.046170544070101e+307":"^","-1":460,"2.406683389525433e+307":"O"}
return a-b+c
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[607] = null
base_2[1][0] = null
base_2[2][5] = {"618":"}F]a","h":"","1.3294661058110333e+308":""," #":1.333078497251135e+308}
return a*b+c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = {"0":893,"1.080850300259296e+308":"","=ZJs-":705,"fV^}":-1,"2.2470233051553184e+307":783,"1.5458658507202084e+308":5.275819548307361e+307,"vm":"Fiy","I":627}
base_3[3] = null
return a*b-c
};
var base_0 = [714,627,893,607,607,705,893,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test469.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)