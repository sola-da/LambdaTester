





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7][2] = [-100]
base_0[6][3] = {"213":"","607":"v+","6.517762464072812e+307":1.2135408043159328e+308,"_l":843,"9.575722842313938e+307":6.750605395822894e+307}
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = ""
base_1[0][1.4677087964888306e+308] = [969,49,"V","B","5EOG^6",843,627]
base_1[7][2] = true
return a/b+c
};
var argument3 = ["N7C","|","=","^","$G","O8TL"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = ["2p","eo","r",";c","<","`","K",","]
argument5[618] = null
base_2[3][4] = ""
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.6177106033227046e+308] = {"3":"!a","5":1.5194533062843776e+308,"49":"R0D","AR<I":"2%bk46u","2.3609818186330725e+307":""}
base_3[4] = {"_":126,"":714,"'":1.0560416431551267e+308,"ij":1.0016055099351705e+308}
argument6['C'] = {"714":"","-100":"@","2.032129315444174e+307":"","4.735436115502806e+307":1.495989553641834e+308,"1.7976931348623157e+308":"","":"","5.575596295363419e+307":893}
return a/b*c
};
var base_0 = ["N","R","V","ck","p?","!,","D-#"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","R","V","ck","p?","!,","D-#"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","R","V","ck","p?","!,","D-#"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","R","V","ck","p?","!,","D-#"]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapGen/test572.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)