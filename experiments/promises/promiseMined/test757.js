/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (profile) {
 callbackArguments.push(arguments) 

    auth.profile = profile;
    return profile;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return sh.run([
        '-c',
        adb + ' push "' + utils.joinPath(targetFolder, 'manifest.webapp') + '" /' + remotePath + '/webapps/' + buildAppName + '.' + gaiaDomain + '/manifest.webapp'
    ]);
};
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument4 = ",,";
var argument5 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 0,
                end: 1
            },
            {
                start: 36,
                end: 37
            }
        ]);
    } finally {
        tearDown();
    }
};
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
r_1 = base_1.then(argument2)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument3,argument4)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument5)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test757.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)