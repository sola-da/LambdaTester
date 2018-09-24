





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['Cb'] = null
return a/b+c+d
};
var argument2 = [25,213,0,0,783,-100];
var argument3 = true;
var argument4 = null;
var argument5 = 655;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = ["ET9CEY","a","<?_","9,n","v",100,"n","-7|",-100]
argument5[7.889879335222838e+307] = 7.189060272051518e+307
argument5[1.359136872727139e+308] = {"":1.6722263450089715e+308,"af#":893}
return a+b+c+d
};
var argument7 = null;
var argument8 = null;
var argument9 = 5e-324;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = {"843":7.509042904007318e+307,"v9{":595,"6?":1.7603236158073739e+308,"":4.831425312941007e+307}
argument9[90] = null
return a+b+c*d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = -1
return a-b-c*d
};
var argument12 = false;
var argument13 = r_3;
var base_0 = ["R=","i"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R=","i"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R=","i"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R=","i"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test934.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)