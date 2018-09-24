





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[7.92397107964922e+307] = 6.013511013555244e+307
argument3[1] = [49]
base_0[0][4] = {"59":655,"126":"","627":6.553763753143284e+307,"705":"b","893":1.1936944219429631e+308,"":1.2684115861759618e+308}
return a/b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['wIs'] = [25,126]
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['1SHF1'] = {"126":8.132553905715039e+307,"595":""}
return a/b*c
};
var argument5 = ["<=","R","_"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[49] = {"13":"","82":"","-100":"","1.1216596272242939e+308":"","-1":"","c":2.6280010864357756e+307,"n":"W","1.7152304457195407e+308":126,"":627,"7s":1.596680060796237e+308}
base_3[8] = 59
return a+b+c
};
var argument7 = "";
var base_0 = [403,1.7976931348623157e+308,969,"#3T"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,1.7976931348623157e+308,969,"#3T"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,1.7976931348623157e+308,969,"#3T"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,1.7976931348623157e+308,969,"#3T"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)