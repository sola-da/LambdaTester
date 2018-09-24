





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = [242,1.7976931348623157e+308,823,5e-324]
argument3[1.4034744228995816e+308] = {"":"5","1.4152594606946776e+308":"J","aq":"PAgbyPm","8.964412382354262e+307":"","1.7352872966023471e+308":783,"6.308864418227777e+306":7.758874326316483e+307,"B":4.850459238327186e+307,"8.809993139242034e+307":"H5(Ob","-1":"$"}
base_0[1]['!cck7Mm'] = {"3.883690897742399e+306":1.6213149743565212e+308,"f-d":"","":969}
return a-b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = [59,705,823,-1]
argument5[5] = false
argument5[3.7154103611117224e+307] = null
return a*b-c
};
var argument4 = "2Jh";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = 1.0974323543207463e+307
base_2[1][2] = null
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = {"q":"_","1.6611974098246044e+308":"QQ"}
argument6 = false
base_3[4] = null
return a-b-c
};
var argument7 = "3";
var argument8 = "";
var base_0 = [403,460,618,0,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,460,618,0,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,460,618,0,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,460,618,0,618]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test250.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)