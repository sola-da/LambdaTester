/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = false;
var argument2 = function (resp) {
 callbackArguments.push(arguments) 

    cb(null, resp);
};
var argument3 = p1;
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 31,
                end: 32
            },
            {
                start: 96,
                end: 97
            },
            {
                start: 106,
                end: 107
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = {"3.2281538382155077e+307":"-9"};
var argument6 = [126,705,783,242,893];
var argument7 = function (exception) {
 callbackArguments.push(arguments) 

    clearTimeout(timeoutId);
    deferred.reject(exception);
};
var argument8 = function (book) {
 callbackArguments.push(arguments) 

    book.options.description.should.be.equal('Default description for the book.');
};
var argument9 = ["5",893,"!g-",100,"=",-100,122];
var argument10 = p2;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
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
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test622.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)