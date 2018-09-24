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
                start: 25,
                end: 26
            },
            {
                start: 36,
                end: 37
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument2 = false;
var argument3 = false;
var argument4 = function (result) {
 callbackArguments.push(arguments) 

    destination.currencyChoices = _.uniq(result.receive_currencies || []);
    destination.currencyChoices.unshift('STR');
    return destination;
};
var argument5 = 0;
var argument6 = {"1.794799576646249e+308":714,"4.650300814198938e+307":1.3455520459422293e+308};
var argument7 = function () {
 callbackArguments.push(arguments) 

    equal(tryToFind, true, 'not found record with id 1');
};
var argument8 = [823,59,783,242,714,-100];
var argument9 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument10 = false;
var base_0 = p1
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test155.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)