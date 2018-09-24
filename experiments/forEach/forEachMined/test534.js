





var callbackArguments = [];
var argument1 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i <= vars.depth.value && !d[n]) {
        d[n] = d3plus.util.uniques(d.values, n).filter(function (unique) {
            return unique && unique != 'undefined';
        })[0];
    }
};
var argument2 = null;
var argument3 = true;
var argument4 = function (dimension) {
 callbackArguments.push(arguments) 

    var Dimension = dimension.substr(0, 1).toUpperCase() + dimension.substr(1);
    $.fn['inner' + Dimension] = ioDim(dimension, false);
    $.fn['outer' + Dimension] = ioDim(dimension, true);
};
var argument5 = function (prop) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesProperty(nodeNames, prop, {
        prop: {
            set: function (val) {
                $.attr(this, prop, val);
            },
            get: function () {
                return $.attr(this, prop) || '';
            }
        }
    });
};
var argument6 = "a";
var argument7 = function (v, i) {
 callbackArguments.push(arguments) 

    if (getAxisId(id) === getAxisId(baseId) && ys[baseId] && !(hasNegativeValue && +v > 0)) {
        ys[baseId][i] += +v;
    }
};
var argument8 = true;
var argument9 = "";
var base_0 = [969,82,460,460,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,82,460,460,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,82,460,460,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,82,460,460,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test534.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)