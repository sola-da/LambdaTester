/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"89":4.084112950363017e+307,"100":5.734128578229129e+307,"":5e-324};
var argument2 = function () {
 callbackArguments.push(arguments) 

    current.removeClass('@-active');
    next.addClass('@-active');
    UI.Utils.checkDisplay(next, true);
    $this.animating = false;
};
var argument3 = 9.385183099455348e+307;
var argument4 = ["[","r ","zN","]mz"];
var argument5 = function testTransitionToGeneral() {
 callbackArguments.push(arguments) 

    casper.waitForSelector(generalTabDetector, function then() {
        casper.on('resource.requested', handleSettingsRequest);
        test.assertEval(function testGeneralIsActive() {
            return document.querySelector('.settings-nav-general').classList.contains('active');
        }, 'general tab is marked active');
    }, casper.failOnTimeout(test, 'waitForSelector `usersTabDetector` timed out'));
};
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    delete pending[rev];
    console.log(err);
    return BPromise.reject(err);
};
var argument7 = p1;
var argument8 = r_2;
var argument9 = function (response) {
 callbackArguments.push(arguments) 

    $scope.posting = false;
    $scope.error = response.data.errorMessage;
};
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
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test758.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)