/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    destination.currencyChoices = _.uniq(result.receive_currencies || []);
    destination.currencyChoices.unshift('STR');
    return destination;
};
var argument2 = p2;
var argument3 = true;
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 38,
                end: 39
            },
            {
                start: 70,
                end: 71
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = r_1;
var argument6 = function (response) {
 callbackArguments.push(arguments) 

    return response.data;
};
var argument7 = null;
var argument8 = null;
var argument9 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument10 = null;
var argument11 = {"59":"D","82":"","843":"H","893":2.28918151144323e+306,"":"","Q2":714,"e]H=":-100,"-1":5e-324,"-100":""};
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test303.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)