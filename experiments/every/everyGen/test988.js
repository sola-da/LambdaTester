





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = false
base_0[1][4] = "q"
return a-b/c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = 1.3225890122689465e+308
argument5 = 3.51977243970723e+307
argument5[1.268696794505825e+308] = null
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = "Y"
argument6[403] = {"627":"dV","Y0":3.3820459353874834e+307,"1.4171930314122443e+308":""}
argument6[1.9097830510613482e+307] = 5.489942229842002e+307
return a-b*c
};
var argument6 = {"4":1.6981617183848874e+308,"100":"","-100":705,"1.1139731545364341e+308":7.87365333554805e+307,"":"","1.5817263383610724e+306":705,"1.0469517103294318e+308":1.0712779761154296e+308};
var argument7 = {"100":3.971000195571266e+307,"627":1.1050824588426307e+308,"655":242,"705":"","893":242,"":157,"7Q":1.0468860566764923e+308,"!":242,"1.209562957827675e+308":"","1.7976931348623157e+308":157};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8] = 1.7976931348623157e+308
base_3[2][7] = {"82":"","607":1.1288427101777008e+308,"655":823,"6.797596750778764e+307":7.915698315240475e+307,"":"c","6.961057560809119e+307":4.371994757123901e+307,"K":"Dkd","dT":705,"L":2.598824516929593e+307,"1.5257840705111366e+308":59}
argument9[403] = true
return a/b/c
};
var argument9 = false;
var argument10 = r_0;
var base_0 = [627,"Xh","h",25,714,403,49,"#"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,"Xh","h",25,714,403,49,"#"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,"Xh","h",25,714,403,49,"#"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,"Xh","h",25,714,403,49,"#"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test988.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)