





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    f[vars.id.value] = f.id;
    if (vars.coords.solo.value.length) {
        return vars.coords.solo.value.indexOf(f.id) >= 0;
    } else if (vars.coords.mute.value.length) {
        return vars.coords.mute.value.indexOf(f.id) < 0;
    }
    return true;
};
var argument2 = 213;
var argument3 = "";
var argument4 = function (bench) {
 callbackArguments.push(arguments) 

    return result[0].compare(bench) == 0;
};
var argument5 = {"|r!?":6.54778453695907e+307,"3.2708075848581173e+307":""};
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return !x.next;
};
var base_0 = [25,618,714]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,618,714]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,618,714]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,618,714]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test47.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)