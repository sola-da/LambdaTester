





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = 1.1885005828138773e+308
return a/b+c
};
var argument2 = r_0;
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[618] = null
base_1[2][5] = false
base_1[0] = "#Q"
return a+b*c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][7] = {"403":8.989284704367846e+305,"460":"","Wu":"Y0qj","":"","1.5816034487453778e+308":843,"1.1438530166427232e+308":82,"6.050808402076015e+307":"t","x":""}
argument7[4.224481734419934e+307] = 126
argument7[2] = {"714":""}
return a*b*c
};
var argument7 = [655];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
return a/b-c
};
var argument9 = r_0;
var argument10 = null;
var base_0 = ["O","65","`&pI%xK","n","Ko","g","r","V"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","65","`&pI%xK","n","Ko","g","r","V"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","65","`&pI%xK","n","Ko","g","r","V"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","65","`&pI%xK","n","Ko","g","r","V"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test324.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)