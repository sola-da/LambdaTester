/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = 8.391239965481314e+307;
var argument2 = function () {
 callbackArguments.push(arguments) 

    return array;
};
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument4 = p2;
var argument5 = {"0":"","5.469265873851155e+306":1.3921651655528982e+308,"e":843,"B;":""};
var argument6 = r_1;
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    expect(results).to.have.length(5);
    _.each(results, function (filter) {
        expect(filter).to.have.property('meta');
        expect(filter.meta).to.have.property('apply', true);
    });
    done();
};
var argument8 = 618;
var argument9 = [49,823,705,242,783,5e-324,126,59];
var argument10 = function (results) {
 callbackArguments.push(arguments) 

    finalResults.rows = results;
    return finalResults;
};
var argument11 = 126;
var base_0 = p2
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
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test278.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)