/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 16,
                end: 17
            },
            {
                start: 20,
                end: 21
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument2 = true;
var argument3 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument4 = function (_header) {
 callbackArguments.push(arguments) 

    assert.same(headers['Content-Type'], _header);
};
var argument5 = {"0":1.5091633110297124e+308,"1.4932443257027246e+308":">","|":"H","5.985567583202208e+307":"I","+":"<x"};
var argument6 = "dbn";
var argument7 = "li";
var argument8 = function (ex) {
 callbackArguments.push(arguments) 

    promise.reject(ex);
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test443.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)