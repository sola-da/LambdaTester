





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = 100
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = null
return a+b-c
};
var argument3 = {"618":"","":242,"@":7.87312587975933e+307,"{":"&;","7.963680110482852e+307":1.1146081042054178e+308};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"595":"PO","969":"","-":"","1.4520367453559065e+308":"","8,":6.228765068040712e+307,"-1":157}
base_2[1][1] = null
base_2[1][2] = ""
return a+b/c
};
var argument5 = 1.4149604037901474e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = false
argument8[3] = {"49":4.2388265291149063e+307,"59":823,"8.315701196876447e+307":"","-100":3.758533529295316e+307,"jWy":"","+x":1.084557697771707e+308,"":"w-G","1.7131410546504466e+308":2.0886019886364808e+307,"a":"t7B"}
base_3[4][7] = ["QS;Jz"]
return a*b+c
};
var argument7 = r_1;
var argument8 = [969,618,460,607,655,213,49,403,49];
var base_0 = [823,627,-100,627]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,627,-100,627]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,627,-100,627]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterGen/test444.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)