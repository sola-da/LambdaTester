/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = r_0;
var argument2 = function () {
 callbackArguments.push(arguments) 

    return db.get('fubar');
};
var argument3 = null;
var argument4 = {"7.199996611368128e+307":"wN="};
var argument5 = function (tracks) {
 callbackArguments.push(arguments) 

    mopidyservice.playTrack(tracks[0], tracks);
};
var argument6 = r_0;
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 31,
                end: 32
            },
            {
                start: 96,
                end: 97
            },
            {
                start: 106,
                end: 107
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument8 = false;
var argument9 = r_0;
var argument10 = function (doc) {
 callbackArguments.push(arguments) 

    if (doc._rev !== rev) {
        throw errors.REV_CONFLICT;
    }
    return createAttachment(doc);
};
var argument11 = "";
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
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test668.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)