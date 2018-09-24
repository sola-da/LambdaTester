





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument2 = r_0;
var argument3 = function (match, index) {
 callbackArguments.push(arguments) 

    var locals = {}, label, value, group;
    locals[valueName] = match;
    label = displayFn(locals);
    value = valueFn(locals) || label;
    group = groupByFn(locals);
    return {
        label: label,
        value: value,
        group: group ? { label: group } : undefined,
        disabled: match.disabled
    };
};
var argument4 = ["Cz)rf","le","[5","q","Fj","K","ycP+","K]","x"];
var argument5 = "2q";
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return addName(d.values[i]);
};
var argument7 = null;
var argument8 = function (v) {
 callbackArguments.push(arguments) 

    var obj;
    if (v.ok) {
        return v;
    } else if (v.error && v.error === 'conflict') {
        obj = errors.REV_CONFLICT;
        obj.id = v.id;
        return obj;
    } else if (v.missing) {
        obj = errors.MISSING_DOC;
        obj.missing = v.missing;
        return obj;
    }
};
var argument9 = null;
var base_0 = [714,157,59,-100,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,157,59,-100,59]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test768.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)