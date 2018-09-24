





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"82":893,"714":"y","823":8.342974665548034e+307,"P":"T","":"x","bBmodh":1.8608836928748143e+307,"%":25,"=[cN":"<b"}
base_0[3][2][5] = "2"
return a*b+c
};
var argument2 = {"3.374327808661839e+307":3.736462811346864e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = null
argument4[9.869573703797622e+307] = 25
return a*b+c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = true
argument7 = 1.7976931348623157e+308
argument7[7] = {"607":"","705":"y4","969":1.7976931348623157e+308,"5e-324":714,"":"F","&)@g":5.840751455960785e+307,"4p":"","1.1451874616155341e+307":607,"Dh":"{I","a":783}
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b-c
};
var argument7 = [655,122];
var base_0 = ["X","gY`","`#","M","4"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X","gY`","`#","M","4"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X","gY`","`#","M","4"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X","gY`","`#","M","4"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test517.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)