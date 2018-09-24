





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return productName == item.item;
};
var argument2 = function (e) {
 callbackArguments.push(arguments) 

    return e.indexOf('@') !== 0;
};
var argument3 = function (patch) {
 callbackArguments.push(arguments) 

    var parsedPath = parsePath(patch.path);
    if ([
            'add',
            'remove'
        ].indexOf(patch.op) != -1 && !isNaN(parsedPath.col)) {
        if (newOrRemovedColumns.indexOf(parsedPath.col) != -1) {
            return false;
        } else {
            newOrRemovedColumns.push(parsedPath.col);
        }
    }
    return true;
};
var argument4 = function (val, key) {
 callbackArguments.push(arguments) 

    return _.str.include(key, term);
};
var argument5 = false;
var base_0 = [893,100,893,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,100,893,213]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,100,893,213]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,100,893,213]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test290.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)