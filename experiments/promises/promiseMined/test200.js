/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function (err) {
 callbackArguments.push(arguments) 

    if (err.status === 401) {
        self.readOnlySource = true;
        return targetDoc.last_seq;
    }
    return 0;
};
var argument3 = "|";
var argument4 = function (response) {
 callbackArguments.push(arguments) 

    processStyleContent(resourceURL, pluginName, response, p);
};
var argument5 = null;
var argument6 = p1;
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 15,
                end: 16
            },
            {
                start: 26,
                end: 27
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument8 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument9 = {"0":8.440638093637933e+307,"v81!":1.5730416671260776e+307,"":"","^":1.5431164580934939e+308,"5.927169968998761e+307":"","3.261397770524847e+306":""};
var base_0 = p1
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
r_1 = base_1.then(argument4,argument5)
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
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test200.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)