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
                start: 4,
                end: 7
            },
            {
                start: 18,
                end: 21
            },
            {
                start: 28,
                end: 31
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument2 = p1;
var argument3 = function (wrapper) {
 callbackArguments.push(arguments) 

    response.result = wrapper.replace('$template', encodeURIComponent(JSON.stringify(request.template))).replace('$data', request.data ? JSON.stringify(request.data, null, 2) : 'null').replace(/\$serverUrl/g, request.protocol + '://' + request.headers.host);
};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument5 = true;
var argument6 = {"25":8.98871574105561e+307,"82":2.7798921031962303e+307,"122":157,"595":"","969":823,"":"6","1.236199985155341e+308":1.6867091063331294e+308,"1.2559538218849188e+308":1.0071186350169818e+308,"$d":242,"=":"u"};
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 79,
                end: 80
            },
            {
                start: 86,
                end: 87
            },
            {
                start: 112,
                end: 113
            },
            {
                start: 125,
                end: 126
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument8 = 100;
var argument9 = r_3;
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
r_1 = base_1.then(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test22.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)