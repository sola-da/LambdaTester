/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = 783;
var argument2 = function (settings) {
 callbackArguments.push(arguments) 

    $scope.enterprise = settings.endpoints['enterprise'];
    $scope.active_endpoint = settings.active_endpoint;
};
var argument3 = true;
var argument4 = function (response) {
 callbackArguments.push(arguments) 

    assert.equal(response.status, 200, test.method + ' status');
    return Q.when(response.body, function (body) {
        return body.read().then(function (content) {
            console.log(content.toString('utf-8'));
        });
    });
};
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument7 = null;
var argument8 = r_1;
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
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test798.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)