





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.3130321063336282e+308] = "q"
argument2['5pji-Y'] = null
return a-b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8] = 1.3225890122689465e+308
base_1[2] = 3.51977243970723e+307
argument4[8] = null
return a+b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = "Y"
argument4[7.92397107964922e+307] = {"627":"dV","Y0":3.3820459353874834e+307,"1.4171930314122443e+308":""}
argument5[1.7394185942769049e+308] = 5.489942229842002e+307
return a-b*c
};
var argument5 = {"4":1.6981617183848874e+308,"100":"","-100":705,"1.1139731545364341e+308":7.87365333554805e+307,"":"","1.5817263383610724e+306":705,"1.0469517103294318e+308":1.0712779761154296e+308};
var argument6 = {"100":3.971000195571266e+307,"627":1.1050824588426307e+308,"655":242,"705":"","893":242,"":157,"7Q":1.0468860566764923e+308,"!":242,"1.209562957827675e+308":"","1.7976931348623157e+308":157};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = 1.7976931348623157e+308
argument8[-1] = {"82":"","607":1.1288427101777008e+308,"655":823,"6.797596750778764e+307":7.915698315240475e+307,"":"c","6.961057560809119e+307":4.371994757123901e+307,"K":"Dkd","dT":705,"L":2.598824516929593e+307,"1.5257840705111366e+308":59}
argument7[7.92397107964922e+307] = true
return a/b/c
};
var argument8 = false;
var argument9 = r_0;
var base_0 = [25,-100,705,1.7976931348623157e+308,969,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,-100,705,1.7976931348623157e+308,969,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,-100,705,1.7976931348623157e+308,969,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,-100,705,1.7976931348623157e+308,969,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test985.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)