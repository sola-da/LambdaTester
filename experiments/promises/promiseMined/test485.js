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
var argument2 = function (err) {
 callbackArguments.push(arguments) 

    errors.logError(err);
    return 'ghost.' + datetime + '.json';
};
var argument3 = {"213":618,"705":"7","24}":"","c4":"",")PP":"","":969,"C99":969};
var argument4 = [157,595,25,823,403,403,122,100];
var argument5 = function () {
 callbackArguments.push(arguments) 

    featureInitialized(name);
};
var argument6 = {"122":1.4965721891250505e+308,"595":242,"":"","{a":"o","-1":49,"1.3321733982029657e+308":"","1.507994807452453e+308":""};
var argument7 = 1.7976931348623157e+308;
var argument8 = [823,-1,460,0,-100,0,1.7976931348623157e+308];
var argument9 = function (res) {
 callbackArguments.push(arguments) 

    var promise2 = cb();
    if (typeof promise2.then === 'function') {
        return promise2.then(function () {
            return res;
        });
    }
    return res;
};
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
r_1 = base_1.catch(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test485.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)