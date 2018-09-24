





var callbackArguments = [];
var argument1 = function (nick) {
 callbackArguments.push(arguments) 

    return server.normalizeName(nick) === userNick;
};
var argument2 = {"627":714,"893":"","8.028223200280866e+307":5e-324,"p":"","G":"","":""};
var argument3 = {"":"","V#":"","1.7976931348623157e+308":"#U","1.0221361535808346e+308":-1};
var argument4 = function (prefix) {
 callbackArguments.push(arguments) 

    return inputTrimmed.indexOf(prefix) === 0;
};
var argument5 = function (def) {
 callbackArguments.push(arguments) 

    return def.message === 'Parameter';
};
var argument6 = null;
var argument7 = null;
var argument8 = function (nick) {
 callbackArguments.push(arguments) 

    return server.normalizeName(nick) === userNick;
};
var argument9 = 1.5779821323449826e+308;
var base_0 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test714.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)