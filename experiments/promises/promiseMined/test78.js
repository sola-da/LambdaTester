/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function checkSlugInputValue() {
 callbackArguments.push(arguments) 

    test.assertField('user', slug);
};
var argument2 = p1;
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    asap(function () {
        callback.call(ctx, null, value);
    });
};
var argument4 = ["BFr ","_","!","iDg","_","8","!","v","$","=d"];
var argument5 = p1;
var argument6 = [655,100,403,705,49];
var argument7 = function (reply) {
 callbackArguments.push(arguments) 

    validSession = true;
    return reply;
};
var argument8 = p2;
var argument9 = null;
var argument10 = function (item) {
 callbackArguments.push(arguments) 

    item.foo.should.equal('bar');
};
var argument11 = p2;
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test78.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)