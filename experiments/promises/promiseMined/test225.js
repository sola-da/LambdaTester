/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument2 = p1;
var argument3 = null;
var argument4 = function (result) {
 callbackArguments.push(arguments) 

    var msg = find('#validatemessage').text();
    if (msg == 'Enter the required fields') {
        equal(msg, 'Enter the required fields', 'Sigup process failed - captured the Error msg- ' + msg);
    }
};
var argument5 = p2;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument7 = r_1;
var argument8 = function (err) {
 callbackArguments.push(arguments) 

    destination.currencyChoices = ['STR'];
    return destination;
};
var argument9 = r_1;
var argument10 = 1.3872923757338922e+308;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
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
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test225.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)