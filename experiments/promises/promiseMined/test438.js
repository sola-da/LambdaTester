/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (record) {
 callbackArguments.push(arguments) 

    record.set('title', 'toto2');
    record.send('willCommit');
    equal(get(record, 'isDirty'), true, 'record is dirty');
    expectAssertion(function () {
        record.unloadRecord();
    }, 'You can only unload a record which is not inFlight. `' + Ember.inspect(record) + '`', 'can not unload dirty record');
    run(function () {
        record.transitionTo('deleted.saved');
    });
};
var argument2 = null;
var argument3 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 15,
                end: 19
            },
            {
                start: 42,
                end: 46
            },
            {
                start: 58,
                end: 62
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument4 = {"25":"cck7Mm","618":4.566482507036003e+307,"969":"","":1.1169136399881119e+308,"1.2422978633686517e+308":"A","1.6713643503880067e+308":"","1.0401645246124907e+307":"U","8Nl!":126,"&":"JY"};
var argument5 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument6 = p1;
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test438.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)