/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = false;
var argument2 = function (destination) {
 callbackArguments.push(arguments) 

    destination.fixedDestinationTag = destination.fixedDestinationTag || fixedDestinationTag;
    return destination;
};
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    if (e) {
        e.query = query;
        e.entityManager = em;
    }
    return Q.reject(e);
};
var argument4 = 607;
var argument5 = p1;
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return el.setImmediateValueInApp('12345').setImmediateValue('12345');
};
var argument8 = p2;
var argument9 = r_3;
var argument10 = function (el) {
 callbackArguments.push(arguments) 

    $parseOptions.$values = parseElement(el) || [];
    return $parseOptions.$values;
};
var argument11 = true;
var base_0 = p2
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
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
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test903.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)