/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument2 = false;
var argument3 = p1;
var argument4 = null;
var argument5 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 17,
                end: 22
            },
            {
                start: 26,
                end: 31
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument6 = p1;
var argument7 = r_0;
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 11,
                end: 12
            },
            {
                start: 19,
                end: 20
            },
            {
                start: 68,
                end: 69
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument9 = {"59":"","242":"W%","1.3581196784202991e+308":"","1.7976931348623157e+308":"6glLw?IV%V","?Fj":"","7.824931989439305e+307":5e-324,"5.821860869131808e+307":"3N"};
var argument10 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument11 = r_0;
var argument12 = true;
var base_0 = p2
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
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
r_3 = base_3.catch(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test448.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)