





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return !_isNamedBlankNode(e);
};
var argument2 = function (ln) {
 callbackArguments.push(arguments) 

    return ln.indexOf('[') === 0 && ln.indexOf(']') > 0;
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    !this.name && validator.settings.debug && window.console && console.error('%o has no name assigned', this);
    if (this.name in rulesCache || !validator.objectLength($(this).rules()))
        return false;
    rulesCache[this.name] = true;
    return true;
};
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return ids.indexOf(d[vars.id.value]) >= 0;
};
var argument5 = null;
var argument6 = ["^","3L","c","i","37tur",";","OV","z","9"];
var base_0 = [627,100,655,627]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,100,655,627]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,100,655,627]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,100,655,627]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test6.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)