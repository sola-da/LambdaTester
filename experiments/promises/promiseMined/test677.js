/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (locals) {
 callbackArguments.push(arguments) 

    if (next == $route.current) {
        if (next) {
            next.locals = locals;
            angular.copy(next.params, $routeParams);
        }
        $rootScope.$broadcast('$routeChangeSuccess', next, last);
    }
};
var argument2 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument3 = {")?":"1Ew","1.7943081201748512e+308":3.2101975278535635e+307,"1.2840375318467056e+308":"U#","5.393054903530909e+307":"n","oia":""};
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 30,
                end: 35
            },
            {
                start: 42,
                end: 47
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = true;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return self.user.getTasks().then(function (_tasks) {
        expect(_tasks).to.have.length(1);
    });
};
var argument7 = true;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test677.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)