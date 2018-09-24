/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function () {
 callbackArguments.push(arguments) 

    test.ok(reportUsageStub.calledWith(TEST_API_KEY, partialQuery));
    test.ok(removeStub.calledWith(TEST_API_KEY, endDateMatch, false));
    test.done();
};
var argument3 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 0,
                end: 1
            },
            {
                start: 22,
                end: 23
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument4 = {"49":1.3765135881968491e+308,"1.7976931348623157e+308":"","9.142301430954918e+307":"x","":"","3.9605510522072915e+307":714,"`#`f":"","4.757844257568974e+307":"","1.6746484119294358e+308":"H"};
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument6 = "e[hm";
var argument7 = function error(value) {
 callbackArguments.push(arguments) 

    deferred.reject(value);
    return $q.reject(value);
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test177.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)