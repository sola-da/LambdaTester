/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument2 = p2;
var argument3 = p1;
var argument4 = p2;
var argument5 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 61,
                end: 65
            },
            {
                start: 72,
                end: 76
            },
            {
                start: 95,
                end: 99
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument6 = r_2;
var argument7 = function () {
 callbackArguments.push(arguments) 

    utils.log('push', 'Waiting for device ...');
    return sh.run([
        '-c',
        adb + ' wait-for-device'
    ]);
};
var argument8 = null;
var argument9 = function _step() {
 callbackArguments.push(arguments) 

    this.emit('back');
    this.evaluate(function _evaluate() {
        history.back();
    });
};
var argument10 = {"1.0078869708717875e+308":6.282614900165236e+307,"":1.6113447662934646e+308,"4.65139312568855e+307":"L","6.169225457711486e+307":1.4097535617144758e+308};
var argument11 = {"1.7522599687829822e+308":"4"};
var base_0 = p1
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
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
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test651.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)