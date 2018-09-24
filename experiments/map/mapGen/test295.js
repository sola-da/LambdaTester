





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = ""
base_0[1][0] = {"25":"","213":59,"":893,"4.761730747971375e+307":"a","Br":1.701536779103388e+308,"(g":893,"5.217165744370757e+307":1.2385300815981474e+308,"8.862574381000535e+307":"qazM","Tcy?5^":"l","k":""}
argument2[403] = ["*d`","g"]
return a-b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['A'] = ["8","!?J","0","#E0L","K 7>>A*@","d","R","|Q"]
base_1[3][1] = null
argument4[893] = ""
return a+b*c
};
var argument4 = [714,"%","aY","r",714,783,607,"#ue","A","ni;{"];
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = ""
return a*b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"82":"","157":9.094308732511597e+307,"":"","6.602374912851725e+307":1.3596558937946122e+308,"=":1.048535785905063e+308,"|":893,"-1":4.0665366914531736e+307,"1.6089767793743998e+308":""}
return a+b*c
};
var argument8 = r_3;
var base_0 = ["`>",627,122,843,"y","8"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test295.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)