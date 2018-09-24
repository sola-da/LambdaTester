





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5.062647675476955e+307] = 9.669888813599358e+307
argument2[126] = "wj"
return a*b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = {"49":7.151422811549586e+307,"122":5.496107919918538e+307,"]0":823,"'7v":2.640342075545992e+307,"":403,"1.2584642973398928e+308":242,"8.408913632324815e+307":157}
return a+b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = null
argument6[-1] = false
return a*b+c
};
var argument6 = [242,82,823,126];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.92397107964922e+307] = [-1,1.7976931348623157e+308,126,122,100,783,122,242]
argument8[403] = ["b","}",-1,82,49]
return a/b*c
};
var argument8 = null;
var argument9 = null;
var base_0 = [627,49,213,969,893,969,59,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,49,213,969,893,969,59,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,49,213,969,893,969,59,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,49,213,969,893,969,59,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test850.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)