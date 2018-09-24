/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (response) {
 callbackArguments.push(arguments) 

    return response[0] + ' ' + response[1];
};
var argument2 = true;
var argument3 = p1;
var argument4 = function _thenBypass() {
 callbackArguments.push(arguments) 

    this.bypass(nb);
};
var argument5 = p2;
var argument6 = {"403":7.711553861403945e+307,"627":1.3348683679650602e+308,"969":"","9.76034060619332e+307":126,"":"","2.169740371732009e+307":"","I?":8.162547364380523e+307,"c":"","1.6707445423279274e+308":3.5443955727306133e+307};
var argument7 = function (result) {
 callbackArguments.push(arguments) 

    att.digest = 'md5-' + result;
    finish();
};
var argument8 = function (val) {
 callbackArguments.push(arguments) 

    promise.$$v = val;
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test50.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)