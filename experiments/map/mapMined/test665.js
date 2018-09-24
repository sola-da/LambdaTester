





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
};
var argument2 = null;
var argument3 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: '\'' + val + '\'',
        token: 'text',
        next: function (stack) {
            stack.pop();
        }
    };
};
var argument4 = {"0":82,"460":969,"627":"i","655":1.0574283919266698e+308,"893":"","4.384207745560948e+307":"","":"","c":157};
var argument5 = function ($) {
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
var argument6 = r_2;
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    return window['inner' + name] || document.compatMode === 'CSS1Compat' && document.documentElement['client' + name] || document.body['client' + name];
};
var argument8 = "";
var base_0 = ["H","|","%9a7","j8Md=T","s?3p","A"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H","|","%9a7","j8Md=T","s?3p","A"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H","|","%9a7","j8Md=T","s?3p","A"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test665.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)