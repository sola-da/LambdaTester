





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[9] = {}
return a*b+c/d
};
var argument2 = r_0;
var argument3 = true;
var argument4 = r_0;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = 5.101289229059677e+307
return a*b-c+d
};
var argument6 = [893,714,5e-324,595];
var argument7 = 1.6713660768188196e+308;
var argument8 = 0;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = null
argument8[627] = true
base_2[2] = false
return a/b-c*d
};
var argument10 = {"49":"2d=","403":"",";":460,"D":714,"1.69498175792665e+308":"","":627,"W":9.565898340562453e+306,"}t":9.533671009479324e+307,"L":607};
var argument11 = r_3;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['Cb'] = null
argument11[7.463432409233234e+307] = {"1.1969235274194555e+308":"e","":4.920110745027154e+307,"Gv":"e"}
argument12[1] = {"213":618,"893":"","":"^v","9.52678891024765e+307":"","R":705,"2.8934618432865473e+307":4.546263839282809e+307,"1.7976931348623157e+308":"!","F":"","x":"6|"}
return a*b/c-d
};
var base_0 = ["X","h"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X","h"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X","h"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X","h"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test221.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)