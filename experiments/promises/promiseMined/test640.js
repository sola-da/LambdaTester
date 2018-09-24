/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    deferred.reject(r);
};
var argument2 = p1;
var argument3 = false;
var argument4 = function (account) {
 callbackArguments.push(arguments) 

    var accountFlags = account.Flags || 0;
    var requiresDestTagMask = stellar.Remote.flags.account_root.RequireDestTag;
    destination.requireDestinationTag = !!(accountFlags & requiresDestTagMask);
    destination.balance = account.Balance || 0;
    return destination;
};
var argument5 = {"655":1.7976931348623157e+308,"823":"","tkEA":1.0765115790638008e+308};
var argument6 = function (res) {
 callbackArguments.push(arguments) 

    process.nextTick(function () {
        callback(null, res);
    });
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test640.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)