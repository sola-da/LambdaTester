





var callbackArguments = [];
var argument1 = function (d) {
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
var argument2 = function () {
 callbackArguments.push(arguments) 

    return function (items) {
        var filteredItems = [];
        for (var i = 0; i < items.length; i++) {
            if (!items[i].completed) {
                filteredItems.push(items[i]);
            }
        }
        return filteredItems;
    };
};
var argument3 = true;
var argument4 = null;
var argument5 = function (atom) {
 callbackArguments.push(arguments) 

    return def.hasOwnProp.call(atomsByKey, atom.key);
};
var argument6 = "";
var argument7 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument8 = "";
var base_0 = [705,49,-1,403,49]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,49,-1,403,49]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,49,-1,403,49]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,49,-1,403,49]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test443.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)