





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.map(function (v, i) {
        return [
            x.call(stack, v, i),
            y.call(stack, v, i)
        ];
    });
};
var argument2 = null;
var argument3 = null;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    return clamp(Math.round(c), 255);
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d.slice();
};
var argument6 = null;
var argument7 = function ($) {
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
var argument8 = null;
var base_0 = [-1,969,-1,-1,969,893,157,213,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,969,-1,-1,969,893,157,213,49]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,969,-1,-1,969,893,157,213,49]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,969,-1,-1,969,893,157,213,49]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test549.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)