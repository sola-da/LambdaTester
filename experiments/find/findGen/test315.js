





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"595":"","":"<=q","5e-324":"","5.79804854034929e+306":1.6311620656304547e+308,"1.3862604775618758e+308":"","4.121312120241695e+307":"","D":893,"3.4537946368561336e+307":6.873741452083066e+307,"7.112896713610577e+307":3.9217969160542723e+307,"5.123960626520218e+307":4.3021951276374907e+307}
return a+b/c
};
var argument2 = "";
var argument3 = ["YC",1.7976931348623157e+308,"]","|vP",714,403,"j`7","E"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8][0] = null
base_1[3][1] = {"126":"y","607":"A","8.538925030706571e+307":595,"g3":2.0814067702021536e+307}
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4.953791384496108e+307] = {"122":7.837640124525268e+307,"c!^":"","?B7":"F"}
base_2[1][7] = [969,1.7976931348623157e+308,714,0,25,595]
argument7[5] = null
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"126":"!","7.118180387578227e+307":"Aa","5.483904196266481e+307":-1}
base_3[7] = null
base_3[3] = ["d"]
return a*b+c
};
var argument7 = {"157":"Z&^3","969":1.651197881357548e+308,"1.3369321471750272e+308":"UY","":1.3296451658319568e+308,"8.187082710592096e+307":1.7937160755510878e+308,"3.243314552009661e+307":""};
var argument8 = r_0;
var base_0 = ["06","m","g","yQhp","6p3duBYo"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["06","m","g","yQhp","6p3duBYo"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["06","m","g","yQhp","6p3duBYo"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["06","m","g","yQhp","6p3duBYo"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test315.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)