





var callbackArguments = [];
var argument1 = function (dp) {
 callbackArguments.push(arguments) 

    var val = rawValueFn(rawEntity, dp);
    return parseRawValue(val, dp.dataType);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
};
var argument3 = r_1;
var argument4 = {"7.819541644923811e+307":460,"c":595,"b":59,"":705,"C":2.090845542224811e+307};
var argument5 = function (parsed) {
 callbackArguments.push(arguments) 

    var classes = [
            '',
            'lsd'
        ];
    if (parsed.tag)
        classes.push(parsed.tag);
    if (parsed.id)
        classes.push('id-' + parsed.id);
    if (parsed.pseudos) {
        parsed.pseudos.each(function (pseudo) {
            classes.push(pseudo.key);
        });
    }
    ;
    return classes.join('.');
};
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return {
        'Component class name': item.componentName,
        'Total inclusive time (ms)': roundFloat(item.inclusive),
        'Total exclusive time (ms)': roundFloat(item.exclusive),
        'Exclusive time per instance (ms)': roundFloat(item.exclusive / item.count),
        'Instances': item.count
    };
};
var base_0 = [-100,1.7976931348623157e+308,"pt"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,1.7976931348623157e+308,"pt"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,1.7976931348623157e+308,"pt"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test561.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)