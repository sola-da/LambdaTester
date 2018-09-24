





var callbackArguments = [];
var argument1 = function (needle) {
 callbackArguments.push(arguments) 

    return !some(arrs, function (haystack) {
        return contains(haystack, needle);
    });
};
var argument2 = {"82":-100,"100":"","242":"","655":7.040431825087699e+307,"1.0464322875753329e+307":"","":"J2tY","_":"s","1.7827145331524614e+307":""};
var argument3 = function (docInfo) {
 callbackArguments.push(arguments) 

    return docInfo.error;
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = "";
var argument6 = function (f) {
 callbackArguments.push(arguments) 

    f[vars.id.value] = f.id;
    if (vars.coords.solo.value.length) {
        return vars.coords.solo.value.indexOf(f.id) >= 0;
    } else if (vars.coords.mute.value.length) {
        return vars.coords.mute.value.indexOf(f.id) < 0;
    }
    return true;
};
var base_0 = [49,0,823,705]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,0,823,705]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,0,823,705]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test568.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)