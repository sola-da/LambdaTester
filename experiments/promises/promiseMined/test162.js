/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    filesystem.remove(fso.path, genericFileSystemCallback);
};
var argument2 = {"0":"P","5e-324":82,"4.681223640124385e+307":1.069624579528372e+308};
var argument3 = p2;
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument5 = false;
var argument6 = "s";
var argument7 = null;
var argument8 = function _step() {
 callbackArguments.push(arguments) 

    this.emit('back');
    this.evaluate(function _evaluate() {
        history.back();
    });
};
var argument9 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [{
                start: 11,
                end: 13
            }]);
    } finally {
        tearDown();
    }
};
var argument10 = ["(","m","c","s","j","$Azm","[M","07","1N"];
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
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test162.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)