





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    var first_match = nest_check(d[vars.edges.source]), second_match = nest_check(d[vars.edges.target]);
    return first_match && second_match;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (log) {
 callbackArguments.push(arguments) 

    return log.reactID.indexOf(rootID) === 0;
};
var argument5 = true;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return !predicate(v);
};
var argument7 = {"157":"i","655":1.7831320363834765e+308,"843":-100,"893":1.2218838473670238e+308,"":"Z","5e-324":5.534211203821633e+307,"3.338194000174974e+306":1.3882446373903214e+308,"7.009018591426276e+307":618};
var argument8 = function (xhr) {
 callbackArguments.push(arguments) 

    return xhr.girder && xhr.girder[category];
};
var argument9 = null;
var base_0 = [969,607,783,-1,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,607,783,-1,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,607,783,-1,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,607,783,-1,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test306.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)