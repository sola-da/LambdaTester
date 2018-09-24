





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {">4Zm":25,"d":"Ar"}
argument3 = {"2":"C","100":1.0187261457436787e+308,"403":5.714486227571787e+307,"w":9.749840516947277e+307,"":122,"<":"","4.1287088569249626e+307":"","5e-324":"","F,[akEQ":1.106006944086887e+308}
argument2 = 783
return a*b/c/d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = [403,126]
return a/b*c*d
};
var argument4 = null;
var argument5 = {"607":""};
var argument6 = {"0":"<HmNT_:Tu;","893":2.7384954657247094e+307,"":1.580355619420428e+308,"[`":"&MP!","2.921444913583056e+307":"q","(":"","3.035260823786779e+307":122,"3.122086389654755e+306":-100,"$":6.8046327570268e+306};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b/c-d
};
var argument8 = 893;
var argument9 = null;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = null
return a+b+c*d
};
var base_0 = ["Rg","e","P","|x"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Rg","e","P","|x"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Rg","e","P","|x"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Rg","e","P","|x"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test29.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)