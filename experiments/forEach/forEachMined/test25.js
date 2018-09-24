





var callbackArguments = [];
var argument1 = function (log) {
 callbackArguments.push(arguments) 

    if (+log.message !== ++testIndex) {
        throw new Error('Number skipped');
    }
};
var argument2 = null;
var argument3 = {"460":""};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    console.log(err.line + ':' + err.character + ' ' + err.reason);
};
var argument5 = r_0;
var argument6 = function (fn) {
 callbackArguments.push(arguments) 

    instanceInjector.invoke(fn || noop);
};
var argument7 = false;
var argument8 = function (r) {
 callbackArguments.push(arguments) 

    if (m[parent] == r[parent]) {
        m.d3plus.merged.push(r);
    }
};
var base_0 = [705,0,969,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,0,969,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,0,969,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,0,969,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test25.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)