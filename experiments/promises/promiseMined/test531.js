/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (els) {
 callbackArguments.push(arguments) 

    els[0].value.should.equal('0');
};
var argument2 = {"122":627,"213":213,"tr":"e","":"6","B":"-",";":"Fo","8.934440994133963e+307":""};
var argument3 = null;
var argument4 = function (response) {
 callbackArguments.push(arguments) 

    $scope.posting = false;
    $scope.error = response.data.errorMessage;
};
var argument5 = p2;
var argument6 = ["m",":aawm=l","A","p_k","%a","B","*%L"];
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 16,
                end: 21
            },
            {
                start: 70,
                end: 75
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument8 = false;
var argument9 = null;
var argument10 = function (err) {
 callbackArguments.push(arguments) 

    result.doc_write_failures += docs.length;
    throw err;
};
var argument11 = p1;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)