/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument2 = {"49":"","":"","5.950100819193453e+307":100,"6.874841529282694e+307":"","x":242,"8.554751896665501e+307":""};
var argument3 = "q'UG&";
var argument4 = function () {
 callbackArguments.push(arguments) 

    searchable('#buckets table tbody tr');
};
var argument5 = null;
var argument6 = p2;
var argument7 = p2;
var argument8 = function (response) {
 callbackArguments.push(arguments) 

    console.log(response);
    return response.content.readAsStringAsync();
};
var argument9 = null;
var argument10 = true;
var argument11 = function (error) {
 callbackArguments.push(arguments) 

    testUtil.reportAsyncError(test, error);
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test965.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)