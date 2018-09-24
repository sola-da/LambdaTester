/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function (expansions) {
 callbackArguments.push(arguments) 

    return vm.practitionerRoles = expansions;
};
var argument3 = p1;
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 48,
                end: 49
            },
            {
                start: 78,
                end: 79
            },
            {
                start: 88,
                end: 89
            },
            {
                start: 100,
                end: 101
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = function (error) {
 callbackArguments.push(arguments) 

    error.stack = error.stack + self.stack.replace(/^[^\n]+/, '');
    throw error;
};
var argument6 = p2;
var argument7 = function (inst) {
 callbackArguments.push(arguments) 

    resolved = inst;
    count += 1;
};
var argument8 = p2;
var argument9 = {"595":25,"627":"F","705":"3","1.5275536583805205e+308":7.580537720339092e+304,"1.153630126244212e+308":8.600329109242109e+307,"":823,"{sW":-100,"1.6435300300566424e+308":""};
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
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test500.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)