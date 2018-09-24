





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {}
base_0[2][8.05235215815219e+307] = "0"
return a+b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['a'] = {"7":6.203667258865659e+307,"82":2.6122899126059187e+307,"126":"","460":"S","893":1.0745791256445797e+308,"":"","1.5858519655698696e+308":"x:","1.615580873312966e+308":"0k","8.957599151786418e+307":"_E}0Z!rC"}
base_1[5] = 1.0708225127844256e+308
return a/b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = [714,"2[x",627,"|-ja8xuvE]","*","lc","GB?","R",1.7976931348623157e+308,460]
return a/b*c
};
var argument6 = null;
var argument7 = {"843":4.4143918309059173e+307,"6.138953429401205e+307":"GG","f":25,"5e-324":"q","1.7875371876098288e+308":1.618355747058555e+308,"1.6227807352469352e+308":1.3536370969934171e+308,"":"<","*Z":100};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4.224481734419934e+307] = [1.7976931348623157e+308,607,100,595]
argument10[4] = false
return a/b-c
};
var argument9 = r_3;
var argument10 = {"100":213,"ga`":"X","":4.863260793406185e+307,"2.292390739893109e+307":655,"*":"{"};
var base_0 = ["]","*z$h","j","--","^","Xc"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]","*z$h","j","--","^","Xc"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]","*z$h","j","--","^","Xc"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]","*z$h","j","--","^","Xc"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)