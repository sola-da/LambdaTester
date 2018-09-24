





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[-100] = null
return a-b/c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"783":"","":"(}","+":"","7.86987358802787e+307":"G","3.264138876580649e+306":"Ney","u":655,"1.5724454554093611e+308":"","1.3368563501713446e+308":1.0479644823248388e+308,"8.181676628116408e+307":"sP&|"}
return a-b-c
};
var argument5 = {"25":9.241500075066794e+307,"705":"|","7.445471644796538e+307":"yl)|AH","":2.1401034692681317e+307,"3.192840450463563e+307":2.7356089229546184e+307,"!A":""};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"59":"","n?":"5",")":"'","":"","-1":157,"7.783269539048398e+307":122,"h}t":7.214954458231795e+307,"5.449172869423547e+307":1.2402166439821997e+308,"4.912687227809369e+307":1.62372344062075e+308}
argument8[1.1679954109349114e+308] = {"2.111684696768346e+307":""}
argument9[3.7154103611117224e+307] = -100
return a-b+c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = ["WG","Ib1%","3"]
argument11[1] = false
return a*b/c
};
var argument10 = true;
var base_0 = ["s",59]
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
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test493.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)