/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument2 = false;
var argument3 = null;
var argument4 = function (text) {
 callbackArguments.push(arguments) 

    var manifest = JSON.parse(text);
    manifest.resources = manifest.resources.map(relativeToManifest.bind(this, url));
    initializeManifest(manifest);
    deferred.fulfill();
};
var argument5 = p1;
var argument6 = false;
var argument7 = null;
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [{
                start: 38,
                end: 39
            }]);
    } finally {
        tearDown();
    }
};
var argument9 = "wdz";
var argument10 = false;
var argument11 = function () {
 callbackArguments.push(arguments) 

    return sequelize.query('SELECT COUNT(*) AS count FROM Users', { type: sequelize.QueryTypes.SELECT });
};
var argument12 = {"25":"","242":705,"893":1.6835275768351957e+308,"":"eH","@":403};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test854.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)