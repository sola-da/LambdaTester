





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = null
base_0[3][2][5] = true
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2][6] = {"8":9.054761856804698e+306,"82":126,"242":1.037213051423737e+307,"460":"h","2.7490335846094574e+307":5.325296940204849e+307,"F+":"L3g"}
return a*b+c
};
var argument3 = {"823":"","7_":1.9374105015211352e+307,"":"","-100":"xM","ihF":"","-1":"y-"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['C'] = 8.610356869986369e+307
base_2[5] = -1
return a+b+c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = [82,-1,"w"]
argument7[6] = ""
return a*b/c
};
var argument7 = false;
var argument8 = null;
var base_0 = ["^<",49,"P#",0,"$","T","BI","0",126,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^<",49,"P#",0,"$","T","BI","0",126,893]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^<",49,"P#",0,"$","T","BI","0",126,893]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^<",49,"P#",0,"$","T","BI","0",126,893]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test804.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)