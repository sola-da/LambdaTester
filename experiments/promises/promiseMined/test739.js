/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = 655;
var argument2 = function checkSlugInputValue() {
 callbackArguments.push(arguments) 

    casper.wait(250);
    test.assertField('user', slug);
};
var argument3 = r_1;
var argument4 = function () {
 callbackArguments.push(arguments) 

    self.emit('contacts.loaded', identity);
};
var argument5 = null;
var argument6 = function (exist) {
 callbackArguments.push(arguments) 

    if (!exist)
        return {};
    return self.render.render({ path: configPath });
};
var argument7 = false;
var argument8 = function (response) {
 callbackArguments.push(arguments) 

    $scope.posting = false;
    $scope.error = response.data.errorMessage;
};
var argument9 = "Py";
var argument10 = true;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test739.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)