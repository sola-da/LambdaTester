





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 49
argument2['7q('] = null
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3.5329845145600404e+307] = [";}Yru",">{"]
base_1[5] = {"58":"f*s-g","607":"UA","705":655,"1.6131282516182402e+308":"a","IOru2RPi":1.4132672214799862e+308,"2.3914910858250984e+307":"","":1.7951850986009256e+308,"YwE":618,"8.916998022705502e+307":"","4.862184654410522e+307":""}
argument4[5.262931091360336e+307] = {",":"k","":6.538902810916834e+307,"-100":7.597540201404163e+306,"a+":5.1822094893782033e+306,"V)":"7Xt!xi","K7":"u","4.4675264780604195e+307":"","h":1.6688166905224268e+308,"1.4707459851373772e+308":";L<S"}
return a+b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[157] = [655,714,618]
argument4[5] = ""
argument5[-100] = {"100":"","714":7.285391941991908e+306,"1.7126913107776027e+308":"<","1.7976931348623157e+308":"[","5e-324":"Yo"}
return a+b*c
};
var argument4 = true;
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
argument7[-100] = ""
return a*b-c
};
var base_0 = ["^","b=","f","*;,=","9","q","ws+","l"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^","b=","f","*;,=","9","q","ws+","l"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^","b=","f","*;,=","9","q","ws+","l"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^","b=","f","*;,=","9","q","ws+","l"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test723.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)