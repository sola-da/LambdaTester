/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 422 && response.data && _this.parseModelErrors) {
        _this.clearModelErrors();
        _this.addModelErrors(_this.parseModelErrors(response.data));
    }
    return $q.reject(response);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    throw new Error('No, this should not happen');
};
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test736.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)