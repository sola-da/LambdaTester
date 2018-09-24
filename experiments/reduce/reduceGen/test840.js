





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 2.2321499094193523e+307
argument3[2] = ")"
return a-b/c/d
};
var argument5 = ["GNe"];
var argument6 = null;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = {"2":"k","49":1.0536172506731301e+308,"100":"","618":2.8911680949059296e+307,"655":1.886336136383433e+306,"4.895704184717594e+307":5e-324,"lx":1.2682756348272414e+308,"1.5817263383610724e+306":705,"1.0469517103294318e+308":1.0712779761154296e+308}
argument6[1.1532786076532189e+308] = "k"
return a+b+c-d
};
var argument9 = r_0;
var argument10 = true;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = false
argument10[4] = {"25":"","242":1.209562957827675e+308,"":100,"3.971000195571266e+307":627}
argument10[7.463432409233234e+307] = {"655":242,"893":242,"":157,"1.7976931348623157e+308":893,"1.4374691116714246e+308":"2z","8.384330450235016e+307":1.7458244781383226e+308}
return a-b*c*d
};
var argument13 = null;
var argument14 = 1.6495420761448873e+308;
var argument15 = false;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[6] = {"893":"dA0","1.5943403817802644e+308":"","":25}
argument15[1.359136872727139e+308] = 1.780791101085789e+308
return a+b-c-d
};
var base_0 = [627,"Xh","h",25,714,403,49,"#"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,"Xh","h",25,714,403,49,"#"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,"Xh","h",25,714,403,49,"#"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,"Xh","h",25,714,403,49,"#"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test840.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)