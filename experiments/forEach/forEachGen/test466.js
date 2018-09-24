





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][4] = 655
argument2[4.224481734419934e+307] = [595,460,82,714,59,126,595,-1]
base_0[8] = false
return a-b*c
};
var argument2 = {"59":"","1.0446313380579697e+308":59,"":7.973261008378906e+307,"2.336574375321133e+307":122,"#":"",",":"","1.179194434936647e+306":"N"};
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = {"969":9.688892450289208e+307,"4.7943098254543e+307":"|","":"","7.333747130114187e+307":2.6079368937209814e+307,"x":627}
return a/b*c
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = false
argument8[0] = "yS7"
base_2[8] = {"7":"","100":"5","655":627,"714":"","2.4109858761869366e+307":823,"j":"","6.300850316419962e+307":"}f","":7.544666785682189e+307,"1.2512158172645717e+308":705}
return a-b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4.224481734419934e+307] = false
base_3[1][1] = true
argument10[4] = "l@8z`"
return a/b+c
};
var argument9 = r_0;
var base_0 = ["*]Q$",823,"6",59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*]Q$",823,"6",59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*]Q$",823,"6",59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*]Q$",823,"6",59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)