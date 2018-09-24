/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p2;
var argument2 = function () {
 callbackArguments.push(arguments) 

    return runCommand(ember, 'generate', 'model', '-h', {
        onOutput: function (string) {
            output += string;
        }
    });
};
var argument3 = function setLocationToInvalid() {
 callbackArguments.push(arguments) 

    this.fillSelectors('form.user-profile', { '#user-location': new Array(1002).join('a') });
};
var argument4 = false;
var argument5 = {"126":8.729265778641331e+307,"7.08646358139404e+307":"",",":"!p*mW0","":627,"9.266058894692924e+307":"",">A":3.092293954282442e+307};
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    RemoteStorage.log('shareing failed', err);
    p.fulfill.apply(p, args);
};
var argument7 = 1.5268835392726839e+308;
var argument8 = function (response) {
 callbackArguments.push(arguments) 

    $scope.retrievedValue = response;
};
var argument9 = p1;
var base_0 = p1
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test754.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)