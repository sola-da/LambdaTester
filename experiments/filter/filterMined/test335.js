





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    return i === 0;
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
var argument3 = null;
var argument4 = r_0;
var argument5 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < l; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument6 = true;
var argument7 = null;
var argument8 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument9 = r_0;
var base_0 = [714,122,460,-1,843,823,403,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test335.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)