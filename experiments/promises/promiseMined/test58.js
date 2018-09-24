/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = false;
var argument2 = function (result) {
 callbackArguments.push(arguments) 

    Assert.isObject(result.rolodex);
    Assert.isNumber(result.rolodex.updateNext);
    Assert.isString(result.rolodex.version);
    Assert.isObject(result.identities);
    Assert.notEqual(typeof result.identities.identity, 'undefined');
    var clearContacts = !!result.rolodex.version;
    return self._cache.sync(Util.arrayForPayloadObject(result.identities.identity), clearContacts).then(function () {
        self.emit('contacts.loaded', identity);
    });
};
var argument3 = function (res) {
 callbackArguments.push(arguments) 

    if (rawData) {
        Array.prototype.push.apply(_future, res.data);
    } else {
        _future.reset(res.data, options);
    }
    if (_.isFunction(options.onSuccess))
        options.onSuccess.call(_this, res);
    return fullResponse ? res : _future;
};
var argument4 = ["&","(","%","kQ","H{`f","?"];
var argument5 = {"7":"","w3":9.25205146482183e+307,"":9.643084600690929e+306,"8.772593840550357e+307":"N"};
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument7 = p2;
var argument8 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
var argument9 = null;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test58.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)