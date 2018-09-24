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
var argument2 = false;
var argument3 = 6.005486792778312e+307;
var argument4 = p2;
var argument5 = function (els) {
 callbackArguments.push(arguments) 

    els[0].value.should.equal('0');
};
var argument6 = {};
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument8 = {"25":"","":893,"(g":893,"5.217165744370757e+307":1.2385300815981474e+308,"8.862574381000535e+307":"qazM","Tcy?5^":"l","k":"","1.0456506386145557e+307":"*d`"};
var argument9 = function (stdout) {
 callbackArguments.push(arguments) 

    assert.equal(stdout.toString('utf8')[0], 'v');
    done();
};
var argument10 = r_1;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test983.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)