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
                start: 43,
                end: 48
            },
            {
                start: 135,
                end: 140
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument2 = null;
var argument3 = p2;
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 12,
                end: 14
            },
            {
                start: 33,
                end: 35
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = [618,126];
var argument6 = function (error) {
 callbackArguments.push(arguments) 

    if ($state.transition !== transition)
        return TransitionSuperseded;
    $state.transition = null;
    $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
    syncUrl();
    return $q.reject(error);
};
var argument7 = 714;
var argument8 = function (data) {
 callbackArguments.push(arguments) 

    return data;
};
var argument9 = r_3;
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
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test648.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)