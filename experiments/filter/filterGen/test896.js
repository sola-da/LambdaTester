





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"213":607,"655":122,"1.1874982558435825e+308":"_M+$?Pct2","":":","1.7976931348623157e+308":655,"-1":126,"J":"","v":1.4760991350600282e+308}
base_0[1] = ""
return a-b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3.5329845145600404e+307] = {"0":607,"4":1.0978103271521247e+308,"714":1.6816270062071494e+308,"1.3039311654987137e+308":"","b-":8.669859997928855e+307,"":"^"}
argument5[-100] = 5.647956741701976e+307
base_1[0][0] = null
return a/b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.268696794505825e+308] = null
argument7[3.7154103611117224e+307] = {"1.0749661174454474e+308":"","r":0,"":1.7976931348623157e+308,"5.942718957968762e+307":8.067119708485706e+307,"1.2050438555023564e+308":595,"w":6.520562252660526e+306,"7.256633653975998e+307":"",")'":"P"}
base_2[3][1.3434821406183095e+308] = {"49":"=Eudc@#","6.447566193969e+307":0,"$gO":""}
return a+b/c
};
var argument6 = "6N$";
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[714] = ["ou","aS%#>Oe!","v+2","H","t","j@7","z=m"]
argument10[5.262931091360336e+307] = 1.2159237521799834e+308
return a-b+c
};
var base_0 = ["C",595,-1,607,5e-324,":"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C",595,-1,607,5e-324,":"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C",595,-1,607,5e-324,":"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test896.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)