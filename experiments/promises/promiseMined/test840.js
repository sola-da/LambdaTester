/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return mite;
};
var argument2 = null;
var argument3 = p2;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    if (activeDeferreds.indexOf(defer) > -1)
        defer.resolve(value);
};
var argument5 = null;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    destination.currencyChoices = ['STR'];
    return destination;
};
var argument7 = "";
var argument8 = null;
var argument9 = function (response) {
 callbackArguments.push(arguments) 

    console.log(response);
    if (response.statusCode === 304) {
        return localFolder.getFileAsync(filename).then(function (file) {
            return Windows.Storage.FileIO.readTextAsync(file);
        });
    } else {
        return fetch_new();
    }
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
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test840.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)