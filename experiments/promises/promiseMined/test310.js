/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 15,
                end: 16
            },
            {
                start: 26,
                end: 27
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = true;
var argument4 = "";
var argument5 = function (changes) {
 callbackArguments.push(arguments) 

    list.innerHTML = '';
    changes.forEach(function (change) {
        var el = document.createElement('li');
        el.textContent = JSON.stringify(change);
        list.appendChild(el);
    });
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    throw new Error('Backbonejs-Router-Title-Helper: Your deferred job failed. No title to set.');
};
var argument7 = "=eJ";
var argument8 = 2.9404243430481715e+307;
var argument9 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 30,
                end: 34
            },
            {
                start: 43,
                end: 47
            },
            {
                start: 73,
                end: 77
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
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test310.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)