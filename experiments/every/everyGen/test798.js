





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = null
return a*b+c
};
var argument2 = 0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = null
return a-b/c
};
var argument4 = "";
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = {"242":"R","714":893,"e#":"2]","8.483583281460309e+307":"q","":627,"1.389094756057792e+308":"T","3.1979092326426034e+307":1.1786488053396747e+308,"O ":969,"s":705}
base_2[5][2] = 1.5030398257566962e+308
argument7[1.3599216339661573e+308] = null
return a/b-c
};
var argument7 = "&";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = ["X%","|g"]
return a-b+c
};
var base_0 = ["K|(","q","Q8R","6",59,"F","LkM_0"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K|(","q","Q8R","6",59,"F","LkM_0"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K|(","q","Q8R","6",59,"F","LkM_0"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K|(","q","Q8R","6",59,"F","LkM_0"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test798.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)