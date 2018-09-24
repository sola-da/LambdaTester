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
                start: 31,
                end: 39
            },
            {
                start: 81,
                end: 89
            },
            {
                start: 106,
                end: 114
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument2 = p1;
var argument3 = function (files) {
 callbackArguments.push(arguments) 

    var funcs = [];
    _.each(files, function (file) {
        if (ignoreFolders.indexOf(file) === -1) {
            funcs.push(Q.nfcall(infoStat, repoPath + '/' + file));
        }
    });
    return funcs;
};
var argument4 = [403,618,82,-1];
var argument5 = null;
var argument6 = function (ex) {
 callbackArguments.push(arguments) 

    console.error('Error setting', key, ': ', ex);
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument8 = false;
var argument9 = false;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
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
var base_2 = p2
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
r_3 = base_3.catch(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test928.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)