





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    var _base;
    if ((_base = $httpProvider.defaults.headers)[method] == null) {
        _base[method] = {};
    }
    return $httpProvider.defaults.headers[method]['If-Modified-Since'] = '0';
};
var argument2 = [705,893,607,823];
var argument3 = false;
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    var code = options.fromString ? file : rjsFile.readFile(file, 'utf8');
    sourcesContent[file] = code;
    toplevel = parse(code, {
        filename: options.fromString ? name : file,
        toplevel: toplevel
    });
};
var argument5 = r_1;
var argument6 = function (rev) {
 callbackArguments.push(arguments) 

    if (height[rev] > max_height) {
        candidates.push(rev);
    }
};
var argument7 = function (storeName) {
 callbackArguments.push(arguments) 

    store = tx.objectStore(storeName);
    stores.push({
        name: storeName,
        keyPath: store.keyPath,
        autoIncrement: store.autoIncrement,
        count: store.count(),
        indices: Array.prototype.slice.apply(store.indexNames)
    });
};
var argument8 = false;
var base_0 = [-100,25,969,460,157,100,714,714,403,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,25,969,460,157,100,714,714,403,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,25,969,460,157,100,714,714,403,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,25,969,460,157,100,714,714,403,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test562.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)