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
var argument2 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument3 = "'p5E";
var argument4 = null;
var argument5 = function (res) {
 callbackArguments.push(arguments) 

    expect(res).to.be.false;
};
var argument6 = function (response) {
 callbackArguments.push(arguments) 

    var data = JSON.parse(response.data);
    if (data.error) {
        throw new bla.ApiError('GEOLOCATION_ERROR', data.error);
    }
    return data.position;
};
var argument7 = ["7",49,"v","eR","9","dqY","c","?e","]d"];
var argument8 = [-1,157,126,25,-1,59];
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test679.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)