/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
var argument2 = null;
var argument3 = "";
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument5 = r_1;
var argument6 = [595,607,242,126,893,49,126,-100];
var argument7 = function () {
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
var argument8 = r_0;
var argument9 = function (value) {
 callbackArguments.push(arguments) 

    observer.onNext(value);
    observer.onCompleted();
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test464.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)