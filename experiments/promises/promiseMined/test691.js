/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    setTimeout(callback);
};
var argument2 = function (reply) {
 callbackArguments.push(arguments) 

    validSession = true;
    return reply;
};
var argument3 = p2;
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var args = Array.prototype.slice.call(arguments);
    var p = promising();
    RemoteStorage.log('calling share now');
    self.share(path).then(function () {
        RemoteStorage.log('shareing fullfilled promise', arguments);
        p.fulfill.apply(p, args);
    }, function (err) {
        RemoteStorage.log('shareing failed', err);
        p.fulfill.apply(p, args);
    });
    return p;
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument4)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument5)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test691.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)