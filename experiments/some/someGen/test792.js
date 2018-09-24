





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = false
argument3[7] = 1.678496104596967e+308
return a+b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = ["((kE"]
base_1[3][4] = false
argument4[0] = 1.2571458042099914e+308
return a*b*c
};
var argument4 = [969,627,607,59,242,213,126,460,627];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = [783,-1,705,"v}P^","rd8",">?WIE"]
argument7[1] = 1.7028578766292727e+308
return a-b+c
};
var argument6 = null;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = {"893":"","969":403,"":"","5.423409683565338e+307":9.642138197832212e+307,"4.063733509469816e+307":5.965740636985201e+307,"d>":893,"-['":705,"g":9.438042194543426e+307,"1.0170347579586251e+307":783,"&)D#":6.140527892108786e+306}
return a*b*c
};
var argument9 = null;
var argument10 = false;
var base_0 = ["!","=X;","S^p6Lq","i"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!","=X;","S^p6Lq","i"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!","=X;","S^p6Lq","i"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!","=X;","S^p6Lq","i"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test792.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)