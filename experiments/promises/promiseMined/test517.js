/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (result) {
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
var argument2 = null;
var argument3 = null;
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    updateStatus('Notes saved.');
};
var argument7 = ["gFZfEi",595,"@"];
var argument8 = function (_header) {
 callbackArguments.push(arguments) 

    assert.same(headers['Content-Type'], _header);
};
var argument9 = 783;
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
r_1 = base_1.catch(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
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
r_3 = base_3.then(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test517.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)