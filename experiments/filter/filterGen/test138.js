





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = {"618":"","823":"0","WM":655,"0o^}<":"","2.192361705615646e+307":"","6.043973614839838e+307":843}
base_0[1]['!cck7Mm'] = null
base_0[3][1.3434821406183095e+308] = 7.186465752856058e+307
return a-b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = "^N5g!c"
base_1['filter'] = null
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = {"126":1.3132925433868976e+308,"618":1.0387405339669805e+308,"627":"8","8.552330720199876e+307":"","":"O","1.4844476221929944e+308":"","r7":25,"+$":"K'd"}
argument5[0] = [59,969]
base_2[2] = true
return a*b/c
};
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = [-100,403,893,783,5e-324,59]
return a*b/c
};
var argument8 = false;
var argument9 = "2";
var base_0 = [893,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test138.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)