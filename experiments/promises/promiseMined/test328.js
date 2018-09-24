/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    if (buildAppName === '*') {
        return pushToDevice(profileFolder, remotePath, adb);
    } else {
        return installOneApp(targetFolder, buildAppName, remotePath, gaiaDomain, adb);
    }
};
var argument2 = null;
var argument3 = function checkSlugInputValue() {
 callbackArguments.push(arguments) 

    test.assertField('general[postsPerPage]', '5');
};
var argument4 = [403,213,893,59,969,618,-100,100,122,618];
var argument5 = function () {
 callbackArguments.push(arguments) 

    return el.setImmediateValueInApp('12345').setImmediateValue('12345');
};
var argument6 = p1;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
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
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test328.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)