





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    var registrations = registrationsTable.get(node);
    if (!registrations)
        return;
    registrations.forEach(function (registration) {
        if (registration.observer === observer)
            registration.removeTransientObservers();
    });
};
var argument2 = true;
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    debug('file %s', file);
    fs.watchFile(file, options, function (curr, prev) {
        if (prev.mtime < curr.mtime)
            fn(file);
    });
};
var argument4 = function (ns) {
 callbackArguments.push(arguments) 

    tlns[ns] = normalizePath(require.toUrl(ns, null, '_').replace(/(\.js)?(\?.*)?$/, ''));
};
var argument5 = function (interceptor) {
 callbackArguments.push(arguments) 

    if (interceptor.request || interceptor.requestError) {
        chain.unshift(interceptor.request, interceptor.requestError);
    }
    if (interceptor.response || interceptor.responseError) {
        chain.push(interceptor.response, interceptor.responseError);
    }
};
var argument6 = r_1;
var base_0 = ["a","_#DJw","]",969,"d|+"," ",618,"bO"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a","_#DJw","]",969,"d|+"," ",618,"bO"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a","_#DJw","]",969,"d|+"," ",618,"bO"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a","_#DJw","]",969,"d|+"," ",618,"bO"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test922.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)