/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (server) {
 callbackArguments.push(arguments) 

    return vm.activeServer = server;
};
var argument2 = p1;
var argument3 = true;
var argument4 = function () {
 callbackArguments.push(arguments) 

    expect(reporterHasFinished).toBe(true);
    done();
};
var argument5 = {"25":2.9858654271162237e+307,"g":1.0485770749509767e+308,"f":122};
var argument6 = function fail(error) {
 callbackArguments.push(arguments) 

    if (!cancelled)
        failed(error);
};
var argument7 = true;
var argument8 = function (info) {
 callbackArguments.push(arguments) 

    info.doc_count.should.equal(1, 'Correct number of docs');
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
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test540.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)