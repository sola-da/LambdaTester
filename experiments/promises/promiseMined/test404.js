/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument2 = true;
var argument3 = {"823":213,"969":"ZU8","!":2.2685183383322293e+307," 2yVL":"GeRv#","":9.918107617469983e+307,"d<":"5M$"};
var argument4 = function (results) {
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
var argument5 = ["!","P"];
var argument6 = r_1;
var argument7 = function (canFulfillQuery) {
 callbackArguments.push(arguments) 

    var matchingDates = findAPIKeyUsageStub.calledWith(TEST_API_KEY, startDateMatch, endDateMatch);
    test.ok(matchingDates);
    test.done();
};
var argument8 = p2;
var argument9 = null;
var argument10 = function (connection) {
 callbackArguments.push(arguments) 

    conn = connection;
    connection._protocol.end();
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test404.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)