/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    errors.logError(err);
    return 'ghost.' + datetime + '.json';
};
var argument2 = ["f_",-1,242,"O",655,100,-100];
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument4 = false;
var argument5 = 1.7976931348623157e+308;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return sh.run([
        '-c',
        adb + ' shell rm -r ' + webapps_path
    ]);
};
var argument7 = "";
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 42,
                end: 47
            },
            {
                start: 49,
                end: 54
            }
        ]);
    } finally {
        tearDown();
    }
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test957.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)