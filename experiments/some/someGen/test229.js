





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['5L'] = [705,"B",714]
argument2[2] = ["X#C",783,82,783,705,"&=x=h"]
return a-b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = ""
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = ["M","8J,","g"]
argument5[4] = {}
return a*b-c
};
var argument5 = {"59":460,"126":2.8283979772395057e+307,"":969,"2.8842629033983154e+307":"","PI1eZKA":1.641171695452092e+308,"1.0879965968896765e+308":705,"'*":"","fZf":5.103369243827552e+307,"1.2186421422982974e+308":"lP"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = [627,100,403]
base_3[1][0] = null
return a/b*c
};
var argument7 = r_3;
var argument8 = null;
var base_0 = [893,"u",655,122,"d","O",893,82]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"u",655,122,"d","O",893,82]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"u",655,122,"d","O",893,82]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"u",655,122,"d","O",893,82]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test229.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)