





var callbackArguments = [];
var argument1 = function _lowercase(item) {
 callbackArguments.push(arguments) 

    return item.toLowerCase();
};
var argument2 = function (err, results) {
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
var argument3 = function (op) {
 callbackArguments.push(arguments) 

    if (Op.isInsert(op)) {
        return new InsertOp(op.value, op.attributes);
    } else if (Op.isRetain(op)) {
        return new RetainOp(op.start, op.end, op.attributes);
    } else {
        return null;
    }
};
var argument4 = null;
var argument5 = function (localizedSymbol) {
 callbackArguments.push(arguments) 

    return regexpEscape(localizedSymbol);
};
var argument6 = r_3;
var base_0 = [618]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test602.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)