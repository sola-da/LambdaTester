/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function testTransitionToGeneral() {
 callbackArguments.push(arguments) 

    casper.waitForSelector(generalTabDetector, function then() {
        casper.on('resource.requested', handleSettingsRequest);
        test.assertEval(function testGeneralIsActive() {
            return document.querySelector('.settings-nav-general').classList.contains('active');
        }, 'general tab is marked active');
    }, casper.failOnTimeout(test, 'waitForSelector `usersTabDetector` timed out'));
};
var argument3 = [893];
var argument4 = null;
var argument5 = function _thenBypassIf() {
 callbackArguments.push(arguments) 

    if (utils.isFunction(condition)) {
        condition = condition.call(this);
    }
    if (utils.isTruthy(condition)) {
        this.bypass(nb);
    }
};
var argument6 = true;
var argument7 = function (files) {
 callbackArguments.push(arguments) 

    var funcs = [];
    _.each(files, function (file) {
        if (ignoreFolders.indexOf(file) === -1) {
            funcs.push(Q.nfcall(infoStat, repoPath + '/' + file));
        }
    });
    return funcs;
};
var argument8 = p1;
var argument9 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 9
            },
            {
                start: 17,
                end: 22
            },
            {
                start: 28,
                end: 33
            },
            {
                start: 41,
                end: 46
            }
        ]);
    } finally {
        tearDown();
    }
};
var base_0 = p2
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
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test818.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)