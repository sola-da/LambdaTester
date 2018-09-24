





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    e.remove();
};
var argument2 = function (s) {
 callbackArguments.push(arguments) 

    s.d3plus.ring = 2;
    var val = vars.size.value ? fetchValue(vars, s, vars.size.value) : 2;
    s.d3plus.r = radius(val);
};
var argument3 = function (res) {
 callbackArguments.push(arguments) 

    if (!res.ok) {
        result.doc_write_failures++;
        errors.push(new Error(res.reason || res.message || 'Unknown reason'));
    }
};
var argument4 = "fOsz";
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    result[key] = this.getOption(key);
};
var argument6 = r_3;
var base_0 = ["@:","r|?0","-","D ","N","u","79"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@:","r|?0","-","D ","N","u","79"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@:","r|?0","-","D ","N","u","79"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@:","r|?0","-","D ","N","u","79"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test385.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)