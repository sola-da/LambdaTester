/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = [59,"r",213,1.7976931348623157e+308];
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    doc._rev.should.equal('1-b1', 'Correct revision wins');
    return db.info();
};
var argument3 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument4 = true;
var argument5 = function (peer) {
 callbackArguments.push(arguments) 

    API.peer1 = peer;
    return done();
};
var argument6 = p1;
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument8 = {"":"s"};
var argument9 = "l";
var base_0 = p2
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test756.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)