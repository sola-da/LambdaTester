





var callbackArguments = [];
var argument1 = function (callback, event) {
 callbackArguments.push(arguments) 

    if (networkEvents.indexOf(String(event)) >= 0) {
        network.on(event, callback);
    }
};
var argument2 = function (animationFactory) {
 callbackArguments.push(arguments) 

    var created = registerAnimation(animationFactory, animationEvent);
    if (!created && isSetClassOperation) {
        registerAnimation(animationFactory, 'addClass');
        registerAnimation(animationFactory, 'removeClass');
    }
};
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    var exists = result.some(function (db) {
            return db.id === doc.id;
        });
    if (!exists) {
        result.push(doc);
    }
};
var argument4 = null;
var argument5 = null;
var argument6 = function (file) {
 callbackArguments.push(arguments) 

    debug('file %s', file);
    fs.watchFile(file, options, function (curr, prev) {
        if (prev.mtime < curr.mtime)
            fn(file);
    });
};
var base_0 = [607,655,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,655,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,655,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,655,59]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test160.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)