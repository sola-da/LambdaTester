/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function (err) {
 callbackArguments.push(arguments) 

    writingCheckpoint = false;
    abortReplication('writeCheckpoint completed with error', err);
    throw err;
};
var argument3 = null;
var argument4 = function (res) {
 callbackArguments.push(arguments) 

    var method = options.reset ? 'reset' : 'set', data = options.parse && _this.parse ? _this.parse(res.data, options) : res.data;
    _this[method](data, options);
    if (_.isFunction(options.onSuccess))
        options.onSuccess.call(_this, res);
    return fullResponse ? res : rawData ? res.data : _this;
};
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var profile = utils.getFile(profileFolder);
    if (!profile.isDirectory()) {
        throw new Error(' -*- build/push-to-device.js: cannot locate' + 'profile folder in ' + options.PROFILE_DIR);
    }
};
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument8 = 1.1651781708210727e+308;
var argument9 = ["X","x","zc7$_"];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
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
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test103.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)