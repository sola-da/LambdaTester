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
var argument2 = false;
var argument3 = function () {
 callbackArguments.push(arguments) 

    if (!remotePath) {
        utils.log('push', 'GAIA_INSTALL_PARENT unset; ' + 'probing previous installation location...');
        remotePath = getRemoteInstallPath(adb);
    }
    utils.log('push', 'Install webapp(s) to ' + remotePath + '...');
    if (/^\/system\//.test(remotePath)) {
        return sh.run([
            '-c',
            adb + ' remount'
        ]);
    }
};
var argument4 = p2;
var argument5 = function (content) {
 callbackArguments.push(arguments) 

    assert.equal(content, test.content, test.method + ' content');
};
var argument6 = p2;
var argument7 = function (response) {
 callbackArguments.push(arguments) 

    assert.same('http://example.com/?q=hypermedia%20client', response.request.path);
    refute('params' in response.request);
};
var argument8 = p2;
var base_0 = p1
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
r_1 = base_1.then(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test230.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)