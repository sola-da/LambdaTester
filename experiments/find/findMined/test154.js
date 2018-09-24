





var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    t.same(0, err.indexOf('Invalid search parameters'), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument2 = false;
var argument3 = function (value, key) {
 callbackArguments.push(arguments) 

    var stop = iter(CS.PackageAndVersion.fromString(key), value);
    return stop;
};
var argument4 = {"714":"","":"","5%":714,"1.1355955927777491e+308":"d"};
var argument5 = function (scope) {
 callbackArguments.push(arguments) 

    type = _.reduce(parts || [], function (memo, val) {
        return memo ? memo[val] : undefined;
    }, scope);
    if (type && type !== scope) {
        return true;
    }
};
var argument6 = 403;
var argument7 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids, [], 'Searching for a nonexistant number did not return an empty array.');
    t.done();
};
var argument8 = r_2;
var argument9 = [5e-324];
var base_0 = [213,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test154.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)