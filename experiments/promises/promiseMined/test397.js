/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument2 = "";
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
var argument4 = {"1":"9","157":969,"595":"","627":"e","1.3551356825272355e+308":"","1.1865901479716535e+308":1.258109991298427e+308,"7.990503264191458e+307":213,"2.960730553232072e+307":"","7.651563764122467e+307":"9"};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return client2.ready().then(function () {
        return done(null);
    });
};
var argument6 = r_0;
var argument7 = {"8":783,"3.956952460012422e+307":"y=","1.7976931348623157e+308":25,"1.7155156991026515e+307":25};
var argument8 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test397.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)