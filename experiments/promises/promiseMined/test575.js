/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = r_0;
var argument2 = function (url) {
 callbackArguments.push(arguments) 

    expect(url).toBe('http://localhost:8000/admin/scheduling');
};
var argument3 = function setLocationToInvalid() {
 callbackArguments.push(arguments) 

    this.fillSelectors('form.user-profile', { '#user-location': new Array(1002).join('a') });
};
var argument4 = false;
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    replyPromise.resolve(reply);
};
var argument7 = p2;
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 38,
                end: 39
            },
            {
                start: 70,
                end: 71
            }
        ]);
    } finally {
        tearDown();
    }
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
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test575.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)