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
var argument2 = function (err) {
 callbackArguments.push(arguments) 

    destination.currencyChoices = ['STR'];
    return destination;
};
var argument3 = {"783":"","":595,"9.673812217505706e+306":49};
var argument4 = function (core) {
 callbackArguments.push(arguments) 

    var serviceRegistry = core.serviceRegistry;
    var pluginRegistry = core.pluginRegistry;
    var preferences = core.preferences;
    mSetup.setUpEditor(serviceRegistry, pluginRegistry, preferences, true);
};
var argument5 = true;
var argument6 = function (data) {
 callbackArguments.push(arguments) 

    $scope.currentFolder.$get({ id: $scope.currentFolder.id });
    $rootScope.$emit('reloadListView', {});
};
var base_0 = p2
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
r_1 = base_1.catch(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument4)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test806.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)