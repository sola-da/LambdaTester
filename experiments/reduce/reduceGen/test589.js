





var callbackArguments = [];
var argument1 = "fQ!";
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = true
return a+b+c-d
};
var argument5 = {"":""};
var argument6 = false;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[90] = null
argument6[7] = {"0":"EDzv","59":9.769991451578944e+307,"":"","1.5046565786052023e+308":2.410954668532999e+307}
base_1[1][0] = true
return a*b-c*d
};
var argument9 = 25;
var argument10 = r_1;
var argument11 = {"1":"!","969":")Px","":1.7895952194157582e+308,"4.950006497063123e+307":"","1.2701405499360306e+308":25,"1.272190706536128e+308":126,"Vh":"I"};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[627] = {"122":1.5786108948268325e+308}
base_2[4] = false
base_2 = "^"
return a*b-c-d
};
var argument13 = r_1;
var argument14 = [0,100,403,126];
var argument15 = r_1;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = 59
return a*b/c+d
};
var base_0 = [403,-100,460,595,823,157,1.7976931348623157e+308,0,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,-100,460,595,823,157,1.7976931348623157e+308,0,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,-100,460,595,823,157,1.7976931348623157e+308,0,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,-100,460,595,823,157,1.7976931348623157e+308,0,242]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test589.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)