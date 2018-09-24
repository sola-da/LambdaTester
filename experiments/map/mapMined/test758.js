





var callbackArguments = [];
var argument1 = function (pp) {
 callbackArguments.push(arguments) 

    return context.propertyPathFn(pp);
};
var argument2 = null;
var argument3 = function (str) {
 callbackArguments.push(arguments) 

    return CS.Dependency.fromString(str);
};
var argument4 = function ($) {
 callbackArguments.push(arguments) 

    var descending = false, get = $ || identity;
    if (isString($)) {
        if ($.charAt(0) == '+' || $.charAt(0) == '-') {
            descending = $.charAt(0) == '-';
            $ = $.substring(1);
        }
        get = expressionCompile($).fnSelf;
    }
    return reverse(function (a, b) {
        return compare(get(a), get(b));
    }, descending);
};
var argument5 = r_1;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var base_0 = ["OOf","p",82,-1,25,49,25,"5J","@R"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["OOf","p",82,-1,25,49,25,"5J","@R"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["OOf","p",82,-1,25,49,25,"5J","@R"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["OOf","p",82,-1,25,49,25,"5J","@R"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test758.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)