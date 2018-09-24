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
var argument2 = {"25":2.8951824678579554e+307,"893":"","":"a","-L":969,"7.075766590141289e+307":1.3608823274823825e+308,"AK3":"y}n","5.202950246692694e+307":5.062994555127262e+307};
var argument3 = function (store) {
 callbackArguments.push(arguments) 

    var req;
    if (keyIfIndex) {
        req = store.index(keyOrIndex).get(keyIfIndex);
    } else {
        req = store.get(keyOrIndex);
    }
    req.onsuccess = req.onerror = function (e) {
        $rootScope.$apply(function () {
            d.resolve(e.target.result);
        });
    };
    return promise;
};
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument5 = 6.1436391678377e+307;
var argument6 = false;
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument8 = [460,122,25,5e-324];
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test274.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)