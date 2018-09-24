





var callbackArguments = [];
var argument1 = function (err, results) {
 callbackArguments.push(arguments) 

    if (err) {
        return callback(err);
    } else {
        var fn = function (left, right) {
            var a = left.criteria, b = right.criteria;
            return a < b ? -1 : a > b ? 1 : 0;
        };
        callback(null, _map(results.sort(fn), function (x) {
            return x.value;
        }));
    }
};
var argument2 = false;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    return {
        'Component class name': item.componentName,
        'Total inclusive time (ms)': roundFloat(item.inclusive),
        'Total exclusive time (ms)': roundFloat(item.exclusive),
        'Exclusive time per instance (ms)': roundFloat(item.exclusive / item.count),
        'Instances': item.count
    };
};
var argument4 = null;
var argument5 = function (op) {
 callbackArguments.push(arguments) 

    if (Op.isRetain(op)) {
        return op;
    } else if (Op.isInsert(op)) {
        return op;
    } else {
        throw new Error('Creating delta with invalid op. Expecting an insert or retain.');
    }
};
var argument6 = false;
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
};
var argument8 = 8.800568320247294e+306;
var argument9 = null;
var base_0 = ["!`","$}_",",","5"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!`","$}_",",","5"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!`","$}_",",","5"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!`","$}_",",","5"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test750.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)