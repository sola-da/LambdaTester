





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6177106033227046e+308] = {"4":126,"242":"","4.3439858568646805e+307":2.338134480395214e+307,"n":"","!":3.6242295420467114e+307,"1.6398513306061369e+308":49}
argument3['3Tpj5'] = [893,126,607,25,607,627,1.7976931348623157e+308,607,213]
argument3[6] = 1.463496129065348e+308
return a/b/c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9.869573703797622e+307] = {"59":2.3254772693344246e+307}
argument6[403] = ["*","|3",">",")","xiP8","=","B","O","S"]
return a*b*c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[49] = 4.133845558297476e+307
argument8[1] = {"59":"","595":"","]K>u<":705,"Q":"K1:","W":"","":""}
argument7[82] = 100
return a+b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = null
base_3[4] = ["Z","#Q","R","OB","dk"]
base_3[3][3] = ""
return a*b-c
};
var argument8 = 9.946313218235002e+306;
var argument9 = true;
var base_0 = ["Tt",126,"]",403,"Jb",-1,"k>","!>"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Tt",126,"]",403,"Jb",-1,"k>","!>"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Tt",126,"]",403,"Jb",-1,"k>","!>"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Tt",126,"]",403,"Jb",-1,"k>","!>"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test496.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)