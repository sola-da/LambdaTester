/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (reply) {
 callbackArguments.push(arguments) 

    validSession = true;
    return reply;
};
var argument2 = true;
var argument3 = false;
var argument4 = r_0;
var argument5 = function (settings) {
 callbackArguments.push(arguments) 

    $scope.enterprise = settings.endpoints['enterprise'];
    $scope.active_endpoint = settings.active_endpoint;
};
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return num;
};
var argument8 = null;
var argument9 = null;
var argument10 = function (e) {
 callbackArguments.push(arguments) 

    should.exist(e, 'error when you have a conflict');
    done();
};
var argument11 = r_2;
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
r_1 = base_1.then(argument4,argument5)
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
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test11.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)