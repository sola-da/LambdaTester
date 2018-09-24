/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 15,
                end: 19
            },
            {
                start: 29,
                end: 33
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = ["R","XR","+","A3@+2","[PbJ","e","]lsgG","O","U4"];
var argument4 = function (settings) {
 callbackArguments.push(arguments) 

    $scope.enterprise = settings.endpoints['enterprise'];
    $scope.active_endpoint = settings.active_endpoint;
};
var argument5 = p2;
var argument6 = function (diffs) {
 callbackArguments.push(arguments) 

    if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
    }
    currentBatch.diffs = diffs;
    currentBatch.pendingRevs = 0;
};
var argument7 = r_0;
var argument8 = function testTransitionToGeneral() {
 callbackArguments.push(arguments) 

    casper.waitForSelector(generalTabDetector, function then() {
        casper.on('resource.requested', handleSettingsRequest);
        test.assertEval(function testGeneralIsActive() {
            return document.querySelector('.settings-nav-general').classList.contains('active');
        }, 'general tab is marked active');
    }, casper.failOnTimeout(test, 'waitForSelector `usersTabDetector` timed out'));
};
var argument9 = false;
var argument10 = p1;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test145.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)