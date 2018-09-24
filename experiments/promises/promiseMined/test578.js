/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = r_0;
var argument2 = function (store) {
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
var argument3 = true;
var argument4 = false;
var argument5 = function (canFulfillQuery) {
 callbackArguments.push(arguments) 

    test.equal(canFulfillQuery, false);
    test.done();
};
var argument6 = p1;
var argument7 = function () {
 callbackArguments.push(arguments) 

    assert.calledOnce(spy);
};
var argument8 = r_0;
var argument9 = r_0;
var argument10 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument11 = p2;
var argument12 = [655,893,893,213,157,100];
var base_0 = p1
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test578.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)