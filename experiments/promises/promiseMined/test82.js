/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    if (result) {
        $log.log(key + ' was succesfully set to:', $scope.data.value);
        $scope.data.showMore = true;
    } else {
        $log.log(key + ' was not set to: ' + $scope.data.value + ' we got ', result);
    }
};
var argument2 = [100,213,607,595];
var argument3 = r_0;
var argument4 = function (dropdowns) {
 callbackArguments.push(arguments) 

    expect(dropdowns).to.have.length(3, 'There should be 3 dropdown menus rendered, found: ' + dropdowns.length);
};
var argument5 = r_0;
var argument6 = function (ex) {
 callbackArguments.push(arguments) 

    promise.reject(ex);
};
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    errors.logError(err);
    return 'ghost.' + datetime + '.json';
};
var argument8 = null;
var argument9 = false;
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
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test82.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)