/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = false;
var argument2 = function () {
 callbackArguments.push(arguments) 

    return sh.run([
        '-c',
        adb + ' push "' + utils.joinPath(profileFolder, 'webapps') + '" ' + webapps_path
    ]);
};
var argument3 = {"627":"Pi","7.995285733345337e+307":6.734809290859912e+307};
var argument4 = function (results) {
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
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    asap(function () {
        callback.call(ctx, null, value);
    });
};
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument7 = {"":""};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test976.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)