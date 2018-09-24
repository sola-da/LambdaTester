





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = true
argument3['*c'] = [714,-1]
return a/b/c-d
};
var argument2 = {"0":"WPG","4.080630730484637e+307":1.6823717752932561e+308,"":"F","U":"MLx{","9.876632004293613e+307":595};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = [":u","3","0Q","`","g","<"]
argument4[7] = {"49":"4X","59":"C)Z","460":1.350316967307615e+308,"714":1.075312907907689e+308,"969":655,"":655,"8.215048424782598e+307":"","f":"3","1.7976931348623157e+308":1.3278217962574133e+308,"!":3.53344621833066e+307}
return a*b-c*d
};
var argument4 = r_2;
var argument5 = true;
var argument6 = "C";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = [59,242]
return a+b-c+d
};
var argument8 = null;
var argument9 = null;
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = "="
base_3[6] = null
argument10[5] = {"0":"","618":"","":655,")G":595,"1.7976931348623157e+308":627,"4.989309227716171e+307":25,"3.7603353200832835e+307":"Nt","d":"s<B","$":705}
return a*b+c-d
};
var base_0 = ["TN",714,627,"a","Ai","Yxa(",823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["TN",714,627,"a","Ai","Yxa(",823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["TN",714,627,"a","Ai","Yxa(",823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["TN",714,627,"a","Ai","Yxa(",823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test299.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)