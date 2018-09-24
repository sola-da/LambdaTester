/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 11,
                end: 12
            },
            {
                start: 19,
                end: 20
            },
            {
                start: 68,
                end: 69
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = {"823":4.947040643374137e+307,"3.955350297419619e+307":-100,"1.0741471021701665e+308":59,"":705,"7.826544123903178e+307":"># 6"};
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 37,
                end: 41
            },
            {
                start: 47,
                end: 51
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = false;
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument7 = 843;
var argument8 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 0) {
        opts.callback(true, false, response.data);
    } else if (response.status == 400 || response.status === 403 || response.status === 404) {
        opts.callback(false, false, response.data);
    } else {
        opts.callback(true, false, response.data);
    }
};
var argument9 = p1;
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
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test799.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)