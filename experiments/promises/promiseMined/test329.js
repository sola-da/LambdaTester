/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    assert.fail(null, null, 'Unable to enter content in Dialog and publish it: ' + err);
};
var argument2 = p1;
var argument3 = function (el) {
 callbackArguments.push(arguments) 

    $parseOptions.$values = parseElement(el) || [];
    return $parseOptions.$values;
};
var argument4 = true;
var argument5 = 1.5526191248967937e+308;
var argument6 = function (changes) {
 callbackArguments.push(arguments) 

    lastSeq = changes.last_seq;
    changes.results[0].changes[0].rev.should.equal('2-a2');
    changes.results[0].seq.should.equal(lastSeq);
    return db.info();
};
var argument7 = true;
var argument8 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test329.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)