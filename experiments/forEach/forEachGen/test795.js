





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['-'] = 9.08556901922347e+307
return a+b-c
};
var argument2 = true;
var argument3 = ["1",705,242,"3",5e-324,"q","o"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = "%P_s:"
base_1[3][1.3434821406183095e+308] = false
argument5[8.748669805137695e+307] = true
return a/b-c
};
var argument5 = null;
var argument6 = {"2.0473466248464578e+307":"","1.7976931348623157e+308":"$uY","":2.716925744444939e+307,"V":"h","1+":2.849169789581526e+306};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = null
argument8[7] = null
base_2[1] = 6.615553436450114e+307
return a+b/c
};
var argument8 = {"":"-S&:);=PS7J","u":"","q":"","_":25,"b":"E","5.158167929352815e+307":-1,"p":"","(":""};
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b/c
};
var argument11 = true;
var argument12 = null;
var base_0 = [213,705,59,595,0,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,705,59,595,0,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,705,59,595,0,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,705,59,595,0,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test795.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)