





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = null
argument2[4] = "Z"
base_0[2][2] = ["V","]eZaGt9","T","5R","^","R","="]
return a-b/c+d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = true
base_1[6][2] = 3.0544327860550863e+307
return a/b+c-d
};
var argument5 = "";
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.738403780925446e+308] = [655,460,714,783,783,403,705,618]
argument9[126] = 49
return a*b+c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[25] = {"893":"G","l#f'":1.247729050197252e+308,"S":"_D","":1.1149108688494655e+307,"A":126,"1.3204291805483147e+308":403,"4.160152190790814e+307":1.389398368488773e+308,"[V":"","H":1.7976931348623157e+308}
base_3[1][5] = {"122":59,"460":"^gH","^":"","9.345453072913508e+307":714,"1.687517339980792e+308":1.517922320985097e+308,"F)Yb)vlc":"BX","4.1020034484871404e+307":893,"":5.814633243787031e+307}
argument9 = [213]
return a+b*c-d
};
var argument9 = null;
var base_0 = [-1,-100,595,242,25]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,-100,595,242,25]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,-100,595,242,25]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,-100,595,242,25]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test972.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)