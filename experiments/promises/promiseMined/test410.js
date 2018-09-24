/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument2 = null;
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument5 = 1.2520614278227745e+308;
var argument6 = {"100":"","213":460,"595":"","607":1.0750304475033423e+308,"-1":"G","jw":"","":1.7976931348623157e+308,"1.3807911076065706e+308":403,"1.231726806463888e+308":"'","4.2700030228200026e+307":595};
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument8 = null;
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
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test410.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)