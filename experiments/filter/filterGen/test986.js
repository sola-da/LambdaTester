





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][2] = ""
argument3[5.262931091360336e+307] = "Lp"
return a/b/c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-100] = {}
base_1[1][0] = {"2.10165014445198e+307":893,"":3.5054585250375244e+307,"B>":""}
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[-100] = {"49":"","122":1.222093259233535e+308,"714":242,"Y":"w","":"","3.267021911367124e+307":607,"3.5819565182564184e+306":213,"be":"","|[uK!":242,"3.9943069570847696e+307":1.6676036500252884e+308}
base_2[1]['!cck7Mm'] = ["Oj","O","@%5","2","y[:","M","Jg",")$","H%k","6"]
argument7['T'] = true
return a-b*c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1.3434821406183095e+308] = {"783":3.477568719394789e+307,"5e-324":5e-324,"1.216270866122463e+308":100,"L<":8.686461305666127e+307}
argument8['c'] = 1.3822838325229329e+308
argument8['K'] = true
return a*b-c
};
var argument8 = false;
var base_0 = [" ?Vu+U","&{","yAgu"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [" ?Vu+U","&{","yAgu"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" ?Vu+U","&{","yAgu"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" ?Vu+U","&{","yAgu"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test986.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)