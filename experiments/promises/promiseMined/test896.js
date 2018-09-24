/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function resetEmailToValid() {
 callbackArguments.push(arguments) 

    casper.fillSelectors('.user-profile', { '#user-email': email }, false);
};
var argument2 = false;
var argument3 = function (items) {
 callbackArguments.push(arguments) 

    admin = items[0].token;
    reader = items[1].token;
    writer = items[2].token;
    admin.toString().should.not.equal(reader.toString());
    admin.toString().should.not.equal(writer.toString());
    writer.toString().should.not.equal(reader.toString());
};
var argument4 = null;
var argument5 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument6 = r_1;
var argument7 = null;
var argument8 = p1;
var argument9 = function (value) {
 callbackArguments.push(arguments) 

    expect(value).to.be.equal(30);
};
var argument10 = r_1;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test896.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)