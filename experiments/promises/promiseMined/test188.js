/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (record) {
 callbackArguments.push(arguments) 

    equal(get(record, 'id'), 1, 'found record with id 1');
    equal(get(record, 'isDirty'), false, 'record is not dirty');
    run(function () {
        store.unloadRecord(record);
    });
    equal(get(record, 'isDirty'), false, 'record is not dirty');
    equal(get(record, 'isDeleted'), true, 'record is deleted');
    tryToFind = false;
    return store.find(Record, 1).then(function () {
        equal(tryToFind, true, 'not found record with id 1');
    });
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var args = Array.prototype.slice.call(arguments);
    self._revCache._activatePropagation();
    var p = promising();
    return p.fulfill.apply(p, args);
};
var argument3 = function (response) {
 callbackArguments.push(arguments) 

    fn(response.data, response.status, response.headers, config);
};
var argument4 = 4.535981932380015e+307;
var argument5 = r_1;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    destination.currencyChoices = ['STR'];
    return destination;
};
var base_0 = p2
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
r_1 = base_1.then(argument2)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument3,argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test188.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)