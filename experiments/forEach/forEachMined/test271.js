





var callbackArguments = [];
var argument1 = function (route, path) {
 callbackArguments.push(arguments) 

    if (!match && (params = switchRouteMatcher($location.path(), route))) {
        match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params
        });
        match.$$route = route;
    }
};
var argument2 = function (animationFactory) {
 callbackArguments.push(arguments) 

    var created = registerAnimation(animationFactory, animationEvent);
    if (!created && isSetClassOperation) {
        registerAnimation(animationFactory, 'addClass');
        registerAnimation(animationFactory, 'removeClass');
    }
};
var argument3 = false;
var argument4 = false;
var argument5 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\p{L}').test(letter)).toBe(true);
    expect(XRegExp('\\p{Letter}').test(letter)).toBe(true);
    expect(XRegExp('\\pL').test(letter)).toBe(true);
};
var argument6 = false;
var argument7 = function (prop) {
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
var base_0 = [-100,122,"+1p",705,"( JU",403,"?0>","]",59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,122,"+1p",705,"( JU",403,"?0>","]",59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,122,"+1p",705,"( JU",403,"?0>","]",59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,122,"+1p",705,"( JU",403,"?0>","]",59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test271.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)