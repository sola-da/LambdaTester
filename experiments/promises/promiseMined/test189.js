/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (module) {
 callbackArguments.push(arguments) 

    var name = filename.slice(0, -11);
    return {
        regexp: new RegExp('^/' + name.replace(/\//g, '\\/') + '(\\/.*)?$'),
        module: module
    };
};
var argument2 = p2;
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument5 = 893;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var base_0 = p1
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
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test189.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)