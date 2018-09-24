





var callbackArguments = [];
var argument1 = function (suffix) {
 callbackArguments.push(arguments) 

    return inputTrimmed.indexOf(suffix, inputTrimmed.length - suffix.length) !== -1;
};
var argument2 = function (nick) {
 callbackArguments.push(arguments) 

    return server.normalizeName(nick) === userNick;
};
var argument3 = 5.956651009869568e+307;
var argument4 = ["B","(!h","l"];
var argument5 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument6 = r_2;
var argument7 = function (def) {
 callbackArguments.push(arguments) 

    return def.message === 'Parameter';
};
var argument8 = null;
var argument9 = {"157":1.1713102259137485e+308,"403":122,"783":607,"969":823,"1.366743586472057e+308":"[","":"76","1.187259722010475e+308":"","Jo)MBE6":"6","-100":""};
var base_0 = ["]8h","<%MUQ","*-","&k","rC","[","z"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]8h","<%MUQ","*-","&k","rC","[","z"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]8h","<%MUQ","*-","&k","rC","[","z"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]8h","<%MUQ","*-","&k","rC","[","z"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test472.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)