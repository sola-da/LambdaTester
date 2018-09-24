/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function (value) {
 callbackArguments.push(arguments) 

    throw new Error('this should be thrown');
};
var argument3 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument4 = "";
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    errors.logError(err);
    return 'ghost.' + datetime + '.json';
};
var argument6 = {"969":1.0937996148104563e+308,"5e-324":595,"{":1.0597151119087302e+308,"1.1520452862680246e+308":823,"5.643757891647357e+307":"","-1":"I","":705,"AkT":4.166246734623507e+307};
var argument7 = [1.7976931348623157e+308,705,595,-1,-100,403,655,714];
var argument8 = [1.7976931348623157e+308,242,893,-100,783,122,714,403,126];
var argument9 = function (data) {
 callbackArguments.push(arguments) 

    data['@class'].should.equal('OUser');
};
var argument10 = ["Y$","f2",-1];
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
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test579.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)