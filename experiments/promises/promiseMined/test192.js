/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument2 = function (renderer) {
 callbackArguments.push(arguments) 

    response = data ? renderer(data, helpers) : renderer;
};
var argument3 = "A";
var argument4 = 4.750351543725998e+307;
var argument5 = p1;
var argument6 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 7,
                end: 8
            },
            {
                start: 10,
                end: 11
            },
            {
                start: 15,
                end: 16
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument7 = ["M","Zb",618,403];
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 61,
                end: 63
            },
            {
                start: 75,
                end: 77
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument9 = null;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test192.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)