





var callbackArguments = [];
var argument1 = function (ns) {
 callbackArguments.push(arguments) 

    tlns[ns] = normalizePath(require.toUrl(ns, null, '_').replace(/(\.js)?(\?.*)?$/, ''));
};
var argument2 = true;
var argument3 = 122;
var argument4 = function (todo) {
 callbackArguments.push(arguments) 

    count += todo.done ? 0 : 1;
};
var argument5 = true;
var argument6 = null;
var argument7 = function (node) {
 callbackArguments.push(arguments) 

    var registrations = registrationsTable.get(node);
    if (!registrations)
        return;
    registrations.forEach(function (registration) {
        if (registration.observer === observer)
            registration.removeTransientObservers();
    });
};
var argument8 = r_1;
var argument9 = function (pn) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < length; i++) {
        var src = sources[i];
        if (src) {
            var val = src[pn];
            if (val !== undefined) {
                r[pn] = val;
                break;
            }
        }
    }
};
var argument10 = null;
var base_0 = [59,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test309.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)