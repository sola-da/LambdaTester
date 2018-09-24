





var callbackArguments = [];
var argument1 = function (ret, set) {
 callbackArguments.push(arguments) 

    var name = downcaseFirst(set.name);
    ret[name] = collectify(jsifyHeaders(set.headers), set.rowSet);
    return ret;
};
var argument2 = {"100":59,"":"","1.1628886723405124e+308":7.003866930906394e+307};
var argument3 = true;
var argument4 = function (memo, value) {
 callbackArguments.push(arguments) 

    if (_.isArray(value))
        return memo.concat(_.flatten(value));
    memo.push(value);
    return memo;
};
var argument5 = "";
var argument6 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable === true) {
        hash[r.name] = r;
    }
    if (r.message === 'Import' && r.root && r.root.variables) {
        var vars = r.root.variables();
        for (var name in vars) {
            if (vars.hasOwnProperty(name)) {
                hash[name] = vars[name];
            }
        }
    }
    return hash;
};
var argument7 = null;
var argument8 = function (memo, value) {
 callbackArguments.push(arguments) 

    return memo.concat(Array.isArray(value) ? flatten(value) : value);
};
var base_0 = ["J","kI7oq"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J","kI7oq"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J","kI7oq"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J","kI7oq"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test736.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)