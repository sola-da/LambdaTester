





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"157":5.811867245860105e+307,"w":655,"#y":""}
argument1[7.92397107964922e+307] = null
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = ";aG"
argument3[4] = "$b|"
base_1[5] = {"49":"g","126":"Di","":"C"}
return a*b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = null
argument5[4.224481734419934e+307] = {"1.0270658554823835e+308":"w","":"g","1.1466387024509896e+308":"","5.217044751255906e+307":100,"n":122,"wd":1.174999006085856e+308}
return a*b-c
};
var argument5 = r_0;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = 969
argument8[1.3130321063336282e+308] = 59
argument8[157] = ["$<","@F>","F","lE["]
return a*b/c
};
var argument8 = true;
var base_0 = [213,"0*UG?{",893,25,"D","{",893,"F"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,"0*UG?{",893,25,"D","{",893,"F"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,"0*UG?{",893,25,"D","{",893,"F"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"0*UG?{",893,25,"D","{",893,"F"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test354.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)