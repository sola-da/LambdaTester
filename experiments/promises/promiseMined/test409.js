/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = "@k";
var argument2 = function (result) {
 callbackArguments.push(arguments) 

    if (result) {
        title = serverUtils.safeString(result.settings[0].value) + '.';
    }
    return title + 'ghost.' + datetime + '.json';
};
var argument3 = false;
var argument4 = 1.25819587345109e+308;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return db.put({ foo: 'bar' }, '_local/baz');
};
var argument6 = function (result) {
 callbackArguments.push(arguments) 

    var msg = find('#validatemessage').text();
    if (msg == '') {
        equal(currentRouteName(), 'signin', 'Successfully signed up and redirected to  sigin page,captured ' + currentRouteName() + 'Route');
    } else if (msg == 'Enter valid email') {
        equal(msg, 'Enter valid email', 'Registration failed - Error text captured as ' + msg);
    } else {
        equal(msg, 'User already exist', 'Sigup process failed - captured the Error msg- ' + msg);
    }
};
var argument7 = 403;
var argument8 = [714,655,122,783,-1];
var argument9 = p2;
var argument10 = function checkCharacterCount() {
 callbackArguments.push(arguments) 

    test.assert(getRemainingBioCharacterCount() === '200', 'Bio remaining characters is 200');
};
var argument11 = p1;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5)
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
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test409.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)