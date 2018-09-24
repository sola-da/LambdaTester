





var callbackArguments = [];
var argument1 = function (target) {
 callbackArguments.push(arguments) 

    target.set('translatedElement', Ext.getStore('InportAsTaxoStore').getRange()[0].get('csvIndex'));
};
var argument2 = function (path) {
 callbackArguments.push(arguments) 

    var module = require('./' + path);
    for (var i in module) {
        classes[i] = module[i];
    }
};
var argument3 = {"0":618,"100":5.610949350429153e+307,"126":"v","893":"","8.68434962027867e+307":"j","":627,"1.5712097030242105e+308":"O","1.6253037998303243e+308":"","1.7869602620863423e+308":705};
var argument4 = function (s) {
 callbackArguments.push(arguments) 

    aq.queue(function (lock) {
        queryNew('INSERT INTO `user_playlists` VALUES ?', [s], function () {
            lock.release();
        });
    });
};
var argument5 = false;
var argument6 = function (handler) {
 callbackArguments.push(arguments) 

    var serverProxy = createServerProxy(handler.hubName, ServerConnectionBackend.server(handler.hubName));
    handler.hub.server = serverProxy;
    handler.doneFn();
};
var base_0 = [157,126,-100,823,843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,126,-100,823,843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,126,-100,823,843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,126,-100,823,843]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test959.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)