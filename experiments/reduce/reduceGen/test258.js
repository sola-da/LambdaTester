





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = null
return a*b-c*d
};
var argument2 = false;
var argument3 = [843,126];
var argument4 = {"403":"I","r":7.262391386182263e+307,"":49,"+":1.183917040223195e+308,"1.0368627823429423e+308":"*","d":1.2632424724371093e+306,"8.612759589359129e+307":705,"Y":"no}uf","1.7185734921164863e+308":-1,"Mm":8.007721058297316e+307};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = [655,213,0,460,100,242,-100,82]
base_1[7] = {"627":1.7746225295711332e+308,"2.502304883914044e+306":627,"1.7733798282174068e+308":"x","4.560162547103654e+307":"","j":82,"9.598768023650586e+307":1.3156402747240127e+307,"1.1509796447271616e+307":""}
return a-b-c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = true
argument7[0] = true
return a-b-c+d
};
var argument8 = null;
var argument9 = {"460":"Y","":"'","N2":1.0461765777594917e+308,"1.368300000019949e+308":"","S-":8.959172345561256e+307,"1.7806379069838817e+308":655};
var argument10 = 122;
var argument11 = {"1.7232685575775472e+308":9.816033320567357e+307,"-1":"72<3","T8":1.0966443546360954e+308,"O":6.189332447704862e+307};
var argument12 = r_3;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2.1869172855352885e+307] = {"242":843,"M* ":783,"":"v","1.483996090786302e+308":"","B":893,"i":"[m","1.6120200798944953e+307":82,"1.7570749894638978e+308":""}
argument10[1] = 783
return a-b-c*d
};
var base_0 = [783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test258.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)