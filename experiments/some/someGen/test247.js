





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][0] = null
base_0[2][5e-324] = 7.23930577029163e+307
return a*b-c
};
var argument2 = "W";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2.249941463060761e+307] = {"49":783}
argument4[6] = {":Jc":"]","":2.2670869284533007e+307,"8@$ux":157,"uty":1.780966393940221e+308}
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = [893,242,100,627,25,100]
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = ""
base_3[1][3] = {"823":1.7976931348623157e+308,"":"","D":",e","1.7367404022949642e+308":8.07176255139416e+307,"Y":"#s"}
base_3[1][2] = {"655":5.513790239932847e+307,"1.6818761753542846e+307":"","L4":5.717271684236853e+307,"2.994369492361557e+306":893,"-1":"","A":1.7976931348623157e+308,"":2.1687434807895552e+307}
return a*b/c
};
var argument6 = {"0":-1,"242":655,"":595,"2.702634589961885e+307":1.7713991511018176e+308,"u<":"","1.2290899610830929e+308":"g","-1":"Gr","3.068281371054896e+307":"["};
var base_0 = ["O?",242,627,893,"s`","%EB2",823,"twf","7hd"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O?",242,627,893,"s`","%EB2",823,"twf","7hd"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O?",242,627,893,"s`","%EB2",823,"twf","7hd"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O?",242,627,893,"s`","%EB2",823,"twf","7hd"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test247.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)