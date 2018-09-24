/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    if (e) {
        e.query = query;
        e.entityManager = em;
    }
    return Q.reject(e);
};
var argument2 = 8.144252386166158e+306;
var argument3 = {"242":1.0213216005102407e+308,"":1.0411488585605958e+308,"1.4345361684343348e+306":1.6884933778693634e+308,"1.3354124980997118e+308":1.051195395003133e+308,"7.38851814870651e+307":1.6888028834914813e+308,"3.8286982160530555e+307":1.6123513890157737e+308,"=*":"qG","3.6474998758631774e+307":157,"vw":"o"};
var argument4 = function () {
 callbackArguments.push(arguments) 

};
var argument5 = null;
var argument6 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 17,
                end: 21
            },
            {
                start: 29,
                end: 33
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    return self.user.getTasks().then(function (_tasks) {
        expect(_tasks).to.have.length(self.tasks.length - 1);
        return self.user.removeTasks([
            self.tasks[1],
            self.tasks[2]
        ]).then(function () {
            return self.user.getTasks().then(function (_tasks) {
                expect(_tasks).to.have.length(self.tasks.length - 3);
            });
        });
    });
};
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test848.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)