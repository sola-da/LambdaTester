/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (theme) {
 callbackArguments.push(arguments) 

    if (currentThemeExt) {
        themestyles.unregisterThemeStyles(currentThemeExt);
    }
    themestyles.currentThemeVariables = theme();
    currentThemeExt = themeExt;
    themestyles.parseGlobalVariables();
    themestyles.reparse();
    if (themeExt.url) {
        themestyles.registerThemeStyles(themeExt);
    }
    catalog.publish(exports, 'themeChange');
};
var argument2 = null;
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument4 = ")o2";
var argument5 = p2;
var argument6 = function (res) {
 callbackArguments.push(arguments) 

    assert.equal(res.body, 'An invalid prism mode was given.');
    done();
};
var argument7 = null;
var argument8 = function (err) {
 callbackArguments.push(arguments) 

    abortReplication('getCheckpoint rejected with ', err);
};
var argument9 = null;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test542.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)