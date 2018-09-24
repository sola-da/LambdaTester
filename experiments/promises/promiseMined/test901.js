/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument2 = {"157":"","7)":7.13988264894397e+307};
var argument3 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument4 = {"460":"Y","969":"","1.233568885726467e+308":"","M":"!h","":"D1"};
var argument5 = function () {
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
var argument6 = 969;
var argument7 = r_1;
var argument8 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test901.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)