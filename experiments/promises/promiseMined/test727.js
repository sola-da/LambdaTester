/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = ["cGR","k;y","<"," ","^r6D"];
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 7
            },
            {
                start: 70,
                end: 73
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = null;
var argument4 = function (record) {
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
var argument5 = {"1":2.460852935942085e+307,"242":460,"714":157};
var argument6 = p1;
var argument7 = p2;
var argument8 = function (elements) {
 callbackArguments.push(arguments) 

    assert.lengthOf(elements, 1, 'Expected to load page 1');
};
var argument9 = {"0":"","100":"i","242":"G","5.959905776820056e+307":126,"6.758388084412298e+307":1.6735330079278722e+308,"":"","A":"","5.427657943617157e+307":"","!":"2;"};
var argument10 = function (deferredTitle) {
 callbackArguments.push(arguments) 

    document.title = deferredTitle;
    _this.trigger('change:title', routeName, deferredTitle);
    delete _this.titles[routeName];
    _this.titles[routeName] = new jQuery.Deferred();
};
var argument11 = {"655":"Zf","":"j","_<JM":"Dj","1.0981162776278754e+308":1.4335782365460443e+308,"R":655};
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test727.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)