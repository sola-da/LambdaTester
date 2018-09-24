





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.35085648319999e+307] = null
argument1[1] = {"595":"yt",":K":">","2.897105586112382e+307":1.6175423644592979e+308,"^k":5.370570628624881e+307,"5.6706340917245e+306":"m","1.7905309654251676e+308":"P"}
argument1[1] = [655,25,783,627]
return a/b*c/d
};
var argument2 = r_0;
var argument3 = r_1;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = null
argument2[3] = {"82":"","8.916169355744112e+307":"<","1.0081564617088193e+308":1.397124883489708e+307}
base_1[4] = false
return a+b+c/d
};
var argument6 = null;
var argument7 = true;
var argument8 = "8";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[90] = null
argument7[627] = {"100":"","403":1.4887994696119536e+308,"7.474970004409115e+307":1.3380258712922548e+308,"1.780777730741967e+308":"0E","-1":"uQ:u8","2.6590327772946186e+307":"2E"}
return a*b*c+d
};
var argument10 = r_0;
var argument11 = r_0;
var argument12 = {"49":"","59":1.025542658383186e+308,"122":"dS1+x|","627":8.656321365197921e+307,"655":"","":157,"D":"U)>","v":1.3384592348937928e+308,"9.40899111045598e+307":"p","-1":7.483346378154519e+307};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[126] = {"403":""}
return a-b-c+d
};
var base_0 = [126,618,1.7976931348623157e+308,1.7976931348623157e+308,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,618,1.7976931348623157e+308,1.7976931348623157e+308,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,618,1.7976931348623157e+308,1.7976931348623157e+308,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,618,1.7976931348623157e+308,1.7976931348623157e+308,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test500.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)