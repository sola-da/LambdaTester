





var callbackArguments = [];
var argument1 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument2 = 1.7976931348623157e+308;
var argument3 = 122;
var argument4 = function (memo, el, i) {
 callbackArguments.push(arguments) 

    if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el)))
        memo.push(el);
    return memo;
};
var argument5 = function (count, i) {
 callbackArguments.push(arguments) 

    return count + calls[i];
};
var argument6 = false;
var argument7 = r_2;
var argument8 = function (p, v) {
 callbackArguments.push(arguments) 

    return { sighting: p.sighting + 1 };
};
var argument9 = 460;
var base_0 = [460,"6C","-ZK",157,126,122,"*",126,49,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"6C","-ZK",157,126,122,"*",126,49,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"6C","-ZK",157,126,122,"*",126,49,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"6C","-ZK",157,126,122,"*",126,49,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test764.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)