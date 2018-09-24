





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    m.setMap(null);
};
var argument2 = function (value, key) {
 callbackArguments.push(arguments) 

    missingObj[key] = value;
};
var argument3 = null;
var argument4 = function (qov) {
 callbackArguments.push(arguments) 

    qoStrings.push(qoName + '=' + encodeURIComponent(qov));
};
var argument5 = 1.7917765993290737e+307;
var argument6 = function (k, callback) {
 callbackArguments.push(arguments) 

    tasks[k](function (err) {
        var args = Array.prototype.slice.call(arguments, 1);
        if (args.length <= 1) {
            args = args[0];
        }
        results[k] = args;
        callback(err);
    });
};
var base_0 = [-1,157,100,213,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,157,100,213,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,157,100,213,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,157,100,213,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test459.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)