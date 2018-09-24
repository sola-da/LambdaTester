





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = 6.297331615613268e+307
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [969,893,82,460,126,126]
argument3[3.3156198695370476e+307] = ""
argument3[3.3156198695370476e+307] = {"705":"y#5R","783":"","5e-324":"","4.887463230690901e+306":"%Bw","q[":655,"":595,"1.5227816580272065e+308":"a"}
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = true
base_2[7] = false
return a/b+c
};
var argument4 = false;
var argument5 = 823;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = {"59":"","460":655,"1.2814635764407727e+308":460,"1.3738295658165286e+308":595,"6.836505758857233e+307":3.0624487126353713e+307,",":893,"-100":"","2.6163341789511003e+307":"-4D","3.6097417875735373e+307":"^]"}
base_3['length'] = 655
return a+b*c
};
var argument7 = null;
var base_0 = ["NK-",")W","4"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["NK-",")W","4"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["NK-",")W","4"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["NK-",")W","4"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test46.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)