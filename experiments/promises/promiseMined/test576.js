/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (text) {
 callbackArguments.push(arguments) 

    var manifest = JSON.parse(text);
    manifest.resources = manifest.resources.map(relativeToManifest.bind(this, url));
    initializeManifest(manifest);
    deferred.fulfill();
};
var argument2 = r_0;
var argument3 = {"49":"","242":"N","1.1698548965822881e+308":"G","1.1289335781791557e+308":"t4VQJ","1.7976931348623157e+308":"","":25};
var argument4 = function setBioToValid() {
 callbackArguments.push(arguments) 

    casper.fillSelectors('.user-profile', { '#user-bio': 'asdf\n' }, false);
};
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument6 = false;
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument8 = false;
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
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test576.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)