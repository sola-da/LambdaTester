





var callbackArguments = [];
var argument1 = function (combined, toAdd) {
 callbackArguments.push(arguments) 

    return _.extend(combined, toAdd);
};
var argument2 = function (pv, cv, ix) {
 callbackArguments.push(arguments) 

    return validateTarget(cv, ix) && pv;
};
var argument3 = true;
var argument4 = "";
var argument5 = function (a, el) {
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
var argument6 = null;
var argument7 = function (err, results) {
 callbackArguments.push(arguments) 

    callback.apply(that, [err].concat(results));
};
var base_0 = [5e-324,82,893,618,460,126,-100,157,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,82,893,618,460,126,-100,157,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,82,893,618,460,126,-100,157,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,82,893,618,460,126,-100,157,213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test829.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)