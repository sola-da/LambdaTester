/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function (response) {
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
var argument3 = {"607":"","81x":"DS","q":"","":242};
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument5 = {"49":"R","x":"","":705,"7.228437453784962e+307":969,"1.035121476063674e+308":"","n]":"A`3"};
var argument6 = function () {
 callbackArguments.push(arguments) 

    $log.info('Delete modal dismissed');
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument8 = false;
var argument9 = -1;
var base_0 = p1
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
r_1 = base_1.catch(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test305.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)