





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return isBarType(d);
};
var argument2 = 705;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = r_0;
var argument6 = function () {
 callbackArguments.push(arguments) 

    function escapeRegexp(queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    return function (matchItem, query) {
        return query ? matchItem.replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
    };
};
var argument7 = "";
var argument8 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var base_0 = [25,893,126,5e-324]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,126,5e-324]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,126,5e-324]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,126,5e-324]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test782.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)