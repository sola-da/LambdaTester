/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (response) {
 callbackArguments.push(arguments) 

    $scope.posting = false;
    $scope.error = response.data.errorMessage;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    if (options.wait)
        _this.add(model, options);
};
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    errors.logError(err);
    return 'ghost.' + datetime + '.json';
};
var argument4 = {"595":"","705":122,"893":1.4934708311493006e+308,"969":607,"":1.134647584581179e+307,"v":"2@(","1.071423274217265e+308":"FK]","-1":"","L":"LD"};
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var base_0 = p2
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
r_1 = base_1.then(argument2)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument3,argument4)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument5)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test418.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)