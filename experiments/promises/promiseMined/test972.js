/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return res;
};
var argument3 = r_0;
var argument4 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 422 && response.data && _this.parseModelErrors) {
        _this.clearModelErrors();
        _this.addModelErrors(_this.parseModelErrors(response.data));
    }
    return $q.reject(response);
};
var argument5 = {"157":705,"4.363350845605516e+307":893,"C8lz;b":"x","1.3741690125091997e+308":"","":"9i,G`xV","o":"Iq$E","`":"R","m":0};
var argument6 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 31,
                end: 32
            },
            {
                start: 54,
                end: 55
            },
            {
                start: 79,
                end: 80
            },
            {
                start: 89,
                end: 90
            }
        ]);
    } finally {
        tearDown();
    }
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument4)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument5,argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test972.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)