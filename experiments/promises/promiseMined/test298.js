/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function success() {
 callbackArguments.push(arguments) 

    if (!cancelled)
        completed();
};
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return cm.getConnection();
};
var argument5 = 1.5224643046794125e+308;
var argument6 = p2;
var argument7 = [403,843,"o",893,"4"];
var argument8 = function (product) {
 callbackArguments.push(arguments) 

    equal(product.get('description'), 'cuisinart', 'The record was unloaded and the adapter\'s `find` was called');
    store.destroy();
};
var argument9 = true;
var argument10 = p2;
var argument11 = function () {
 callbackArguments.push(arguments) 

    throw reason;
};
var argument12 = p1;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test298.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)