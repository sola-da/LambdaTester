





var callbackArguments = [];
var argument1 = function (group) {
 callbackArguments.push(arguments) 

    result.push.apply(result, group._entities.filter(newFilterFunc));
};
var argument2 = true;
var argument3 = function (k) {
 callbackArguments.push(arguments) 

    var n = parseInt(k.replace(/[^\d]/g, '')), spaces = k.replace(/[^ ]/g, '').length;
    if (spaces === 0 || n % spaces !== 0) {
        self.log.warn('Invalid ' + self.name + ' key: "' + k + '".');
        self.end();
        return false;
    }
    n /= spaces;
    md5.update(String.fromCharCode(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255));
};
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    var group = entityGroupMap[e.entityType.name];
    if (!group) {
        group = {};
        group.entityType = e.entityType;
        group._entities = [];
        entityGroupMap[e.entityType.name] = group;
    }
    group._entities.push(e);
};
var argument5 = function (control) {
 callbackArguments.push(arguments) 

    control.$setPristine();
};
var argument6 = null;
var argument7 = null;
var base_0 = [59,655,122,655,783,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,655,122,655,783,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,655,122,655,783,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,655,122,655,783,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test22.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)