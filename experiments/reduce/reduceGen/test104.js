





var callbackArguments = [];
var argument1 = [893,100,655,969,49,460,1.7976931348623157e+308];
var argument2 = {"213":"","607":"","":"1","1.410116313580885e+307":"I","w?":1.5071314836918567e+308,"F<":1.1783411617153941e+308};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = ["q",213,655,"w"]
argument2[0] = 4.963841462582841e+307
return a+b*c/d
};
var argument5 = null;
var argument6 = {"25":"","":1.0301512161018554e+307,"1.7976931348623157e+308":"WK]",">r":"","3.4643451242160495e+307":"D6","1.1332229875706717e+308":"E","n":714,"1.315073349729452e+308":"","^":843,"-1":"R"};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = {"-1":"","":893}
argument5[126] = {"157":8.270672171154207e+307,"8sR":595}
argument5[4] = null
return a/b/c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = ""
return a-b+c+d
};
var argument10 = true;
var argument11 = r_2;
var argument12 = false;
var argument13 = [655,893,100,893,213,122];
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = [403,82,607,100]
return a-b-c*d
};
var base_0 = [-100,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test104.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)