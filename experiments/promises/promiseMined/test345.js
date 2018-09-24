/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p2;
var argument2 = function () {
 callbackArguments.push(arguments) 

    return self.User.findAll().then(function (_users) {
        return self.Task.findAll().then(function (_tasks) {
            self.user = _users[0];
            self.task = _tasks[0];
        });
    });
};
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    throw new Error('No, this should not happen');
};
var argument5 = null;
var argument6 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument7 = function (info) {
 callbackArguments.push(arguments) 

    info.doc_count.should.equal(1, 'Correct number of docs');
};
var argument8 = 1.5429785414228537e+307;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test345.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)