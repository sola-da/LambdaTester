/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    exports.parsePlugin(pluginName);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return self.User.findAll().then(function (_users) {
        return self.Task.findAll().then(function (_tasks) {
            self.user = _users[0];
            self.task = _tasks[0];
        });
    });
};
var argument3 = "";
var argument4 = 82;
var argument5 = p1;
var argument6 = function () {
 callbackArguments.push(arguments) 

    if (restartB2g) {
        utils.log('push', 'Restarting B2G...');
        sh.run([
            '-c',
            adb + ' shell start b2g'
        ]);
    } else {
        var Q3 = Q.defer();
        Q3.resolve();
        return Q3.promise.then(function () {
            utils.log('push', 'Restarting ' + manifest.name + '...');
            utils.killAppByPid(pid);
        });
    }
};
var argument7 = true;
var argument8 = function (value) {
 callbackArguments.push(arguments) 

    throw new Error('this should be thrown');
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test712.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)