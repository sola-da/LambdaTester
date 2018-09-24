/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function () {
 callbackArguments.push(arguments) 

    RemoteStorage.log('shareing fullfilled promise', arguments);
    p.fulfill.apply(p, args);
};
var argument3 = null;
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    if (errorCallback)
        errorCallback(error);
    return Q.reject(error);
};
var argument5 = true;
var argument6 = true;
var argument7 = function (loginController) {
 callbackArguments.push(arguments) 

    var pr = loginController.showLogin();
    pr.then(function (username) {
        config.objects.session.arguments.push(username);
        exports.launchEditor(catalog, config).then(resolveLaunchPromise, launchPromise.reject.bind(launchPromise));
    });
};
var argument8 = function () {
 callbackArguments.push(arguments) 

    test.ok(reportUsageStub.calledWith(TEST_API_KEY, partialQuery));
    test.ok(removeStub.calledWith(TEST_API_KEY, endDateMatch, false));
    test.done();
};
var argument9 = {};
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test525.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)