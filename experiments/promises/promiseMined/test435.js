/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function (_headers) {
 callbackArguments.push(arguments) 

    assert.same(headers, _headers);
};
var argument3 = ["91ZUvokW)","|","#"];
var argument4 = false;
var argument5 = function (peer) {
 callbackArguments.push(arguments) 

    API.peer1 = peer;
    return done();
};
var argument6 = false;
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 48,
                end: 49
            },
            {
                start: 78,
                end: 79
            },
            {
                start: 88,
                end: 89
            },
            {
                start: 100,
                end: 101
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument8 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test435.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)