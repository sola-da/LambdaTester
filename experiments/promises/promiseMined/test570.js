/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = [1.7976931348623157e+308,25,82,100,213,655,59,595,618];
var argument2 = function (error) {
 callbackArguments.push(arguments) 

    logError(common.unexpectedOutcome(error));
};
var argument3 = null;
var argument4 = [823,213,25,893,783,627];
var argument5 = function () {
 callbackArguments.push(arguments) 

    return runCommand(ember, 'help', 'generate', 'model', {
        onOutput: function (string) {
            output += string;
        }
    });
};
var argument6 = function (error) {
 callbackArguments.push(arguments) 

    error.stack = error.stack + self.stack.replace(/^[^\n]+/, '');
    throw error;
};
var argument7 = r_0;
var argument8 = function (result) {
 callbackArguments.push(arguments) 

    appSettings.set({ token: $scope.manualToken });
    ghAPI.setToken($scope.manualToken);
    $location.url('/');
};
var argument9 = 783;
var argument10 = r_0;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
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
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test570.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)