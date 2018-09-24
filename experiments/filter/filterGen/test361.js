





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = null
return a/b+c
};
var argument2 = 7.973703885895275e+306;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.4034744228995816e+308] = null
argument5[4] = ""
argument5['wIs'] = {"49":1.3199518492658684e+308,"1.5822670313326497e+308":"","5.27190265530521e+307":1.1300201946896594e+308,"Xc":"qL"}
return a-b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][1] = [59,"}",607,"|>",893]
argument8[4] = null
argument8[403] = 1.701074982105343e+308
return a*b*c
};
var argument7 = null;
var argument8 = "";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = [618,783,969,403]
base_3[0] = {"5e-324":9.435680507147088e+307,"[":1.6024018190024754e+308,"3.4580169072264123e+307":"zL71;p","":5e-324,"w":""}
return a+b*c
};
var argument10 = ["]4!?,","+","F","FJCN","_;","J","j","$"];
var argument11 = [705,"j",-100,783,403,"w",-100,-1,460,"Z"];
var base_0 = ["J6","*T",100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test361.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)