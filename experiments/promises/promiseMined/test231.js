/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (docs) {
 callbackArguments.push(arguments) 

    docs.forEach(function (doc) {
        if (returnValue.cancelled) {
            return completeReplication();
        }
        if (doc.ok) {
            result.docs_read++;
            currentBatch.pendingRevs++;
            currentBatch.docs.push(doc.ok);
            delete diffs[doc.ok._id];
        }
    });
};
var argument2 = function (error) {
 callbackArguments.push(arguments) 

    themeLoadingPromise.reject(error);
};
var argument3 = 7.495392489751525e+307;
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument5 = {"595":"@H8","893":")","9.397381740384988e+307":"I","r":705};
var argument6 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var base_0 = p1
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
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test231.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)