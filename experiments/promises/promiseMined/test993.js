/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function () {
 callbackArguments.push(arguments) 

    load.metadata.importedHTMLDocument = link.import;
    resolve('');
};
var argument3 = null;
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    errors.logError(err);
    return 'ghost.' + datetime + '.json';
};
var argument5 = {"0":"","7":"","49":"%;c","843":"TeN<W","":"","3.2727391256826944e+307":5.679312903124451e+307,"1.7976931348623157e+308":"`Un","1.6956082207297743e+308":"lh","UU":-1,"2.955397749835582e+307":"$5W"};
var argument6 = p1;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument8 = true;
var argument9 = function () {
 callbackArguments.push(arguments) 

    if (self._ready === null) {
        self._ready = self._initStorage(self._config);
    }
    self._ready.then(resolve, reject);
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test993.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)