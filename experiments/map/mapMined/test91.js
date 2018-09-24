





var callbackArguments = [];
var argument1 = function (match, index) {
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
var argument2 = 1.1641252303880783e+308;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    return View.dirtyViews[key];
};
var argument4 = function (str) {
 callbackArguments.push(arguments) 

    return str.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g, function (s) {
        var code = parseInt(s.substr(2), 16);
        return regexp_safe_literal(code) ? String.fromCharCode(code) : s;
    });
};
var argument5 = {"403":49,"7.253803640272284e+306":1.6705520017421629e+308,"":"Ojdh","1.2638065358229524e+308":"g"};
var argument6 = null;
var argument7 = function (js) {
 callbackArguments.push(arguments) 

    return ctor.fromJSON(js);
};
var argument8 = true;
var argument9 = 1.4551637532233697e+308;
var base_0 = [122,242,"x1",705,"Z","k",595,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,242,"x1",705,"Z","k",595,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,242,"x1",705,"Z","k",595,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,242,"x1",705,"Z","k",595,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test91.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)