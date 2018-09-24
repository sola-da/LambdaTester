





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['s'] = true
argument2[627] = null
argument2 = null
return a/b*c*d
};
var argument2 = null;
var argument3 = null;
var argument4 = 59;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = true
argument3 = {"?":"","1.468113257577508e+308":"","$":969}
base_1[8] = 595
return a*b+c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = "vy"
argument8[4] = {"122":"","242":82,"460":4.91856616369573e+307,"595":59,"T":"%","":"","1.7104700565067577e+308":""}
return a-b/c-d
};
var argument7 = 1.5567315589535335e+308;
var argument8 = r_2;
var argument9 = false;
var argument10 = r_2;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[';N'] = ["zO",100," WS",893,"i","j","w"]
return a-b-c*d
};
var base_0 = ["r","!eK{k7Q","d","1G","4","s+k"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r","!eK{k7Q","d","1G","4","s+k"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r","!eK{k7Q","d","1G","4","s+k"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r","!eK{k7Q","d","1G","4","s+k"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test605.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)