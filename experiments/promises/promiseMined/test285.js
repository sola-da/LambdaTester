/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (resp) {
 callbackArguments.push(arguments) 

    oldCB(null, resp);
};
var argument2 = true;
var argument3 = function (fetched) {
 callbackArguments.push(arguments) 

    expect(fetched).to.exist;
    expect(fetched.length).to.equal(0);
    done();
};
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    error.stack = error.stack + self.stack.replace(/^[^\n]+/, '');
    throw error;
};
var argument5 = {"100":3.268903409988116e+307,"122":"","618":"q","&J-":"","G":1.5383951103935048e+308,"R":"","t9":"","aG":"","^":1.1650612308967078e+308,"":655};
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    if (self._ready === null) {
        self._ready = self._initStorage(self._config);
    }
    self._ready.then(resolve, reject);
};
var argument8 = "y";
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
r_1 = base_1.then(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test285.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)