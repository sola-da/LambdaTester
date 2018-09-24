/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (error) {
 callbackArguments.push(arguments) 

    if (next == $route.current) {
        $rootScope.$broadcast('$routeChangeError', next, last, error);
    }
};
var argument2 = "";
var argument3 = {"1.3904615460544467e+308":"8","tH":1.6294192005532328e+307,"":655};
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 22,
                end: 24
            },
            {
                start: 31,
                end: 33
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = p1;
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument7 = function (res) {
 callbackArguments.push(arguments) 

    expect(res).to.be.false;
};
var argument8 = {"1.7976931348623157e+308":")Y","qd,":"ea","5.333241975052084e+307":1.6628001580085889e+308,"1.372413905919323e+307":1.4979338281827292e+308,"":"","A":8.483331177599505e+307};
var argument9 = null;
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test551.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)