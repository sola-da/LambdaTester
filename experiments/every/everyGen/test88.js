





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = [618,"I",607]
base_0[0][0] = false
return a*b-c
};
var argument2 = "m";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = {"705":1.035121476063674e+308,"969":"","":"n]","=":"","5.105900084412971e+307":7.228437453784962e+307,"1.0864774007382708e+308":"",",g":"","A`3":49,"R":""}
base_1[0][2] = null
return a/b*c
};
var argument4 = 242;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 3.634855607606808e+307
base_2[8] = 1.6577079905084508e+308
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = {"7.686654611367278e+307":714,"c":1.4307309464220499e+308}
base_3 = 2.4627227584417516e+307
base_3[0] = 59
return a/b+c
};
var argument7 = 714;
var base_0 = ["z"," l-","V","[",969,"K81x"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z"," l-","V","[",969,"K81x"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z"," l-","V","[",969,"K81x"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z"," l-","V","[",969,"K81x"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test88.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)