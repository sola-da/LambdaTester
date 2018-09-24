





var callbackArguments = [];
var argument1 = function (combined, toAdd) {
 callbackArguments.push(arguments) 

    return _.extend(combined, toAdd);
};
var argument2 = function (obj, pair) {
 callbackArguments.push(arguments) 

    var i = pair.indexOf('='), key = pair.slice(0, i), val = pair.slice(++i);
    obj[key] = decodeURIComponent(val);
    return obj;
};
var argument3 = function (a, el) {
 callbackArguments.push(arguments) 

    el = el.evaluate(compressor);
    if (a.length == 0 || el.length == 1) {
        a.push(el);
    } else {
        var last = a[a.length - 1];
        if (last.length == 2) {
            var val = '' + last[1] + separator + el[1];
            a[a.length - 1] = [
                make_node_from_constant(compressor, val, last[0]),
                val
            ];
        } else {
            a.push(el);
        }
    }
    return a;
};
var argument4 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, join), join);
    return acc;
};
var argument5 = null;
var argument6 = [-1,403,126];
var base_0 = ["o+AodSv","<"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o+AodSv","<"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o+AodSv","<"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o+AodSv","<"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test769.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)