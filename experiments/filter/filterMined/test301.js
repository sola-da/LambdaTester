





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return !$('.users-box[data-uid="' + user.uid + '"]').length;
};
var argument2 = [">P8lMW","+`6","Po","q","0",":"];
var argument3 = function (d, i) {
 callbackArguments.push(arguments) 

    return i === 0;
};
var argument4 = null;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return new RegExp('^' + weekday, 'i').test(item);
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    var match = false;
    for (var i = 0; i < vars.id.nesting.length; i++) {
        var level = vars.id.nesting[i];
        match = level in d && d[level] === vars.focus.value[0];
        if (match) {
            depth = i;
            break;
        }
    }
    return match;
};
var argument7 = null;
var argument8 = {};
var base_0 = [627,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,655]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,655]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test301.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)