/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (ex) {
 callbackArguments.push(arguments) 

    promise.reject(ex);
};
var argument2 = {"49":1.4100772830629433e+308,"460":"'oP","1.4100887708520929e+308":"","7.589045934790494e+307":"","":"a","UA":"","1.4921939711243124e+308":"R","1.5466078922572574e+308":"","''7":1.1963296259367247e+307,"k4":7.552104255138579e+307};
var argument3 = false;
var argument4 = function (reason) {
 callbackArguments.push(arguments) 

    return callback.fcall().then(function () {
        throw reason;
    });
};
var argument5 = true;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var base_0 = p1
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
var base_2 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test434.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)