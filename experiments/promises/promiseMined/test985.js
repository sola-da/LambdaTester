/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function checkSlugInputValue() {
 callbackArguments.push(arguments) 

    casper.wait(250);
    test.assertField('user', slug);
};
var argument2 = {"618":7.913273846123657e+307,"4.107677451735579e+307":2.454278998694458e+307,"Q":1.6358264407556254e+308,"":"","1.4966592469186287e+308":"","8.081147822786203e+307":783,"5.697002333888922e+307":""};
var argument3 = function onReject(reason) {
 callbackArguments.push(arguments) 

    reject(reason);
};
var argument4 = r_0;
var argument5 = function (res) {
 callbackArguments.push(arguments) 

    assert.equal(res.body, require('../../package.json').version);
    done();
};
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument7 = p2;
var argument8 = true;
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
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test985.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)