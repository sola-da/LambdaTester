/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function () {
 callbackArguments.push(arguments) 

};
var argument3 = 1.2763819797323655e+308;
var argument4 = null;
var argument5 = function (reply) {
 callbackArguments.push(arguments) 

    validSession = true;
    return reply;
};
var argument6 = true;
var argument7 = p1;
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 35,
                end: 40
            },
            {
                start: 53,
                end: 58
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument9 = 1.1285928781487219e+308;
var argument10 = function (response) {
 callbackArguments.push(arguments) 

    console.log(response);
    if (response.isSuccessStatusCode) {
        return parse.save_object('update', {
            channels: {
                __op: 'AddUnique',
                objects: ['c' + yak_id + 'c']
            },
            objectId: object_id
        });
    }
};
var argument11 = false;
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test393.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)