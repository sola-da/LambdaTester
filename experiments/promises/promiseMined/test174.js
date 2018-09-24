/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function (result) {
 callbackArguments.push(arguments) 

    usedCB(null, result);
};
var argument3 = r_0;
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    searchable('#bucket table tbody tr');
};
var argument7 = "BimjI";
var argument8 = {"714":4.736863204667712e+307,"A":"x-","":"&zm"};
var argument9 = ["%VWC","<","@","g","j"];
var argument10 = function (response) {
 callbackArguments.push(arguments) 

    assert.same('http://example.com/next', response._links.self.href);
};
var argument11 = null;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test174.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)