





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 4.704696672657944e+307
argument2[5] = null
return a*b+c+d
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1277822633002616e+308] = {"49":4.2591397903246595e+307,"714":"W","823":5.377633259486112e+307,"":"",":w{V":82,"-100":1.802077945357351e+307,"1.0539853554203716e+308":""}
argument5[25] = {}
return a-b/c-d
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[90] = {"4":1.239486259952045e+308,"100":"","122":"O","2.8914603264103284e+307":843,"":"R%","1.739576980711266e+306":""}
return a+b*c*d
};
var argument9 = r_1;
var argument10 = {"25":"","82":823,"157":1.2152943194115472e+308,"1.0160326522380069e+308":"g9","":-100,"J`":655};
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = {"242":460,"Nt":618,"I:":595,"0c23":"F","1.049624892149752e+308":"k"}
return a+b-c*d
};
var base_0 = ["-C",",&X",403,"z","zz",595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-C",",&X",403,"z","zz",595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-C",",&X",403,"z","zz",595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-C",",&X",403,"z","zz",595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test697.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)