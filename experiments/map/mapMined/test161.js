





var callbackArguments = [];
var argument1 = function (attribute) {
 callbackArguments.push(arguments) 

    return {
        caption: attribute,
        snippet: attribute + '="$0"',
        meta: 'attribute',
        score: Number.MAX_VALUE
    };
};
var argument2 = "D#_s";
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
var argument4 = true;
var argument5 = function (c) {
 callbackArguments.push(arguments) 

    return c.get(selectKey);
};
var argument6 = null;
var argument7 = function (c) {
 callbackArguments.push(arguments) 

    return parseInt(c, 16);
};
var argument8 = [843,-1,-1,1.7976931348623157e+308];
var base_0 = ["wg>",100,"L","YH5b",823,627,"B"]
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
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["wg>",100,"L","YH5b",823,627,"B"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["wg>",100,"L","YH5b",823,627,"B"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test161.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)