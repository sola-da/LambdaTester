





var callbackArguments = [];
var argument1 = function (object) {
 callbackArguments.push(arguments) 

    var stringObject = JSON.stringify(object).toLowerCase();
    if (stringObject.match(searchTerm.toLowerCase()))
        filteredList.push(object);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (d, i) {
 callbackArguments.push(arguments) 

    if (vars.depth.value == i) {
        var prev = m[vars.id.nesting[i - 1]];
        if (typeof prev === 'string') {
            m[d] = 'd3plus_other_' + prev;
        } else {
            m[d] = 'd3plus_other';
        }
    } else if (i > vars.depth.value) {
        delete m[d];
    }
};
var argument5 = "jen ";
var argument6 = false;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    tmp.push(e);
};
var argument8 = r_0;
var argument9 = 49;
var argument10 = function (change) {
 callbackArguments.push(arguments) 

    exports.call(opts.onChange, change);
};
var argument11 = [49,460,1.7976931348623157e+308,655,0];
var base_0 = [122,242,705,"j","l",-100,5e-324,843,"R","W="]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,242,705,"j","l",-100,5e-324,843,"R","W="]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,242,705,"j","l",-100,5e-324,843,"R","W="]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,242,705,"j","l",-100,5e-324,843,"R","W="]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test994.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)