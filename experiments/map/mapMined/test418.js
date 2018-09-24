





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return (method.call ? method || value : value[method]).apply(value, args);
};
var argument2 = true;
var argument3 = null;
var argument4 = function (dependant) {
 callbackArguments.push(arguments) 

    var release = dependant.pkgMeta._release;
    return dependant.endpoint.name + (release ? '#' + release : '');
};
var argument5 = function (v) {
 callbackArguments.push(arguments) 

    return v.toCSS();
};
var argument6 = true;
var argument7 = function (r) {
 callbackArguments.push(arguments) 

    if (r.makeImportant) {
        return r.makeImportant();
    } else {
        return r;
    }
};
var argument8 = null;
var base_0 = [705,823,122,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,823,122,705]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,823,122,705]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,823,122,705]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test418.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)