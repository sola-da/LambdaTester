/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p2;
var argument2 = function (payload) {
 callbackArguments.push(arguments) 

    return _this.deserialize(payload, serializerOptions);
};
var argument3 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
var argument5 = p2;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
var argument7 = null;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)