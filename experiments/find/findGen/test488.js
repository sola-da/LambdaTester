





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.7668525981726295e+307] = false
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = [0,893,607,403,618,-100,-1]
argument3[1] = {"1.0651395050767022e+308":705,"|":7.445471644796538e+307,"yl)|AH":"","2.1401034692681317e+307":3.192840450463563e+307,"2.7356089229546184e+307":"!A","":25,"9.241500075066794e+307":"("}
base_1['length'] = true
return a*b*c
};
var argument3 = "ft";
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[705] = 5.722255336982543e+307
return a+b/c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[705] = {"8":"","h]":969,"h}t":7.214954458231795e+307,"5.449172869423547e+307":1.2402166439821997e+308,"":1.7976931348623157e+308,"4.912687227809369e+307":1.62372344062075e+308,"2.0133222606420238e+307":2.111684696768346e+307,"(+":655}
argument9[4.953791384496108e+307] = [213,122,100,618,460,655]
base_3[4] = null
return a/b+c
};
var argument8 = ["!","1%","3","Y_1p","on","XIh@","?","TX`"];
var argument9 = "M";
var base_0 = [100,-1,607,655,213,126,655,49,595,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-1,607,655,213,126,655,49,595,783]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-1,607,655,213,126,655,49,595,783]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-1,607,655,213,126,655,49,595,783]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test488.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)