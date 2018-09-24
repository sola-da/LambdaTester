





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = [627,969,618,82,655]
argument3[2] = false
return a/b-c
};
var argument2 = {"403":823,"655":25,"843":"-","8.028553293091058e+307":"w","!,'!|2":"^7","5.687793573896889e+307":"","GJ":969,"":1.3772409629936904e+308,"3}":"t"};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.3434821406183095e+308] = "];p"
argument5[6] = ""
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2][783] = true
base_2[4] = null
return a-b/c
};
var argument6 = "i|";
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = null
base_3[7] = {"122":1.7620665354704028e+308,"460":")8","783":2.9978001591355685e+307,"3.9552564048905664e+307":"W","@":8.725788610727508e+306,"1.592552890857441e+308":1.275488562355602e+308}
argument10[3] = true
return a-b/c
};
var base_0 = ["*x","SE!dW","$@",655,"^O","B)",-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*x","SE!dW","$@",655,"^O","B)",-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*x","SE!dW","$@",655,"^O","B)",-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*x","SE!dW","$@",655,"^O","B)",-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test219.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)