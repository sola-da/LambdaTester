





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[893] = {"5.443707125064643e+307":126,"8.316283877632272e+307":1.250233638487199e+308,"":"","zs":1.1144703084402061e+308,"T":"XE","1.220926117412338e+308":"^","S{'":"oky4D","Vh":1.516043512561433e+308}
argument2[-1] = 893
return a/b/c
};
var argument2 = 618;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = 403
argument6[1.7847438319683965e+308] = 1.7477191829252832e+308
return a-b+c
};
var argument5 = "";
var argument6 = [";6","_5"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = 627
argument8[1.7121211182125595e+308] = 59
return a*b+c
};
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = null
argument11[3.7154103611117224e+307] = [783,82,893,-100,-100,100,655]
argument11[242] = "?"
return a+b*c
};
var base_0 = [100,607,126,25,49,460,213,49]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,607,126,25,49,460,213,49]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test683.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)