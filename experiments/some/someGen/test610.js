





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = null
base_0[7] = {"126":783,"242":"","Rt":"=","":"","3.58066645599486e+307":2.494366384325399e+307,"Ft":460,"a[Qu":"1[h","{":"8T"}
return a/b-c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9] = [122]
return a/b*c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5e-324] = 1.6652755238341475e+308
return a+b-c
};
var argument7 = {"705":9.021614970325087e+307,"1.132083655687868e+308":"","":3.109534700875864e+307,"8|^b":242,"1.109053246743246e+308":"lOl","k<7bJ":82,"9.61940088002199e+307":"^?"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = null
base_3[7] = null
base_3[1][2] = 7.622876967196821e+307
return a-b*c
};
var base_0 = ["5P&",595,"Q","`]",783,"gY",595,82,100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5P&",595,"Q","`]",783,"gY",595,82,100]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5P&",595,"Q","`]",783,"gY",595,82,100]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5P&",595,"Q","`]",783,"gY",595,82,100]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test610.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)