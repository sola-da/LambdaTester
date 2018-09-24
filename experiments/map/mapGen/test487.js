





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][4] = {"213":969,"3.590042334553426e+307":"","":"","?T%KO":1.7360604227651232e+307,"8.09610023279843e+307":9.106260233998988e+307,"1.1012796926391172e+308":1.16134806718137e+308,"`":5e-324,"JO(":3.413051440467266e+307,"3.091284829167926e+307":1.5626799324428982e+308}
argument2[6] = false
argument2[9.869573703797622e+307] = 1.2176711878011087e+308
return a*b+c
};
var argument2 = null;
var argument3 = "G2yMIJ";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['C'] = true
argument5[893] = [460,"j!Ce_#O48","^","n","ms["]
argument5['C'] = {}
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = null
argument6['f'] = true
return a-b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = [82,-100,655,893,460]
base_3[1][0] = null
base_3[3][2][5] = null
return a+b*c
};
var argument7 = r_3;
var argument8 = {"0":1.3598043420671425e+308,"213":1.0095991031894088e+308,"":"","-;":-100,"9.279887376050608e+307":"","CH":655,"3.8313810196538687e+307":49};
var base_0 = ["l",403,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l",403,49]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l",403,49]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l",403,49]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test487.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)