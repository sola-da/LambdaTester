/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 9,
                end: 14
            },
            {
                start: 20,
                end: 25
            },
            {
                start: 38,
                end: 43
            },
            {
                start: 49,
                end: 54
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument2 = null;
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    destination.currencyChoices = ['STR'];
    return destination;
};
var argument4 = 1.2150763962593032e+307;
var argument5 = null;
var argument6 = function (result) {
 callbackArguments.push(arguments) 

    var msg = find('#validatemessage').text();
    if (msg == '') {
        equal(currentURL(), '/home', 'Dashboard page is rendered');
        equal(currentRouteName(), 'home', currentRouteName() + ' is found in Dashboard');
    } else {
        equal(msg, 'Invalid email or password', 'Registration failed - Error text captured as ' + msg);
    }
};
var argument7 = [1.7976931348623157e+308,122,969,595,783,823,618];
var argument8 = null;
var argument9 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 62,
                end: 63
            },
            {
                start: 71,
                end: 72
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument10 = true;
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
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test88.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)