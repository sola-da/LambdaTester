/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 15,
                end: 19
            },
            {
                start: 42,
                end: 46
            },
            {
                start: 58,
                end: 62
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument4 = function () {
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
var argument5 = p2;
var argument6 = r_2;
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test122.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)