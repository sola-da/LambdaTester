





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][2][5] = ""
argument2[2] = 6.663579244644027e+305
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][4] = {"460":1.0677564026116235e+308,"1.0984024555181584e+307":"_","JH!":"","3.94631957916369e+306":783,"1.3429591324078817e+306":"Ij"}
return a/b*c
};
var argument3 = null;
var argument4 = 8.392716537579526e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['C'] = 2.9397037239108064e+307
argument6['A'] = true
argument6[607] = null
return a-b/c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7173047913506838e+308] = ""
base_3[1][7] = null
base_3 = "0+"
return a*b+c
};
var argument8 = ["M","t","4","A","b","v"];
var argument9 = {"122":714,"126":"","9.747991801538646e+307":"","7.743394503481196e+307":783,"1.122612002727768e+308":607,"1.7976931348623157e+308":"Mf","":"","Fi{":783,"%":"mJa","qH":"vS"};
var base_0 = ["0U","8^3","!oF=","bt","t"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0U","8^3","!oF=","bt","t"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0U","8^3","!oF=","bt","t"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0U","8^3","!oF=","bt","t"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test950.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)