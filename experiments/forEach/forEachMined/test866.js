





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    _remove(element.target, gesture.defaultEvent);
    array.forEach(gesture.subEvents, function (type) {
        _remove(element.target, gesture.defaultEvent + '.' + type);
    }, this);
};
var argument2 = function (e) {
 callbackArguments.push(arguments) 

    em.attachEntity(e, entityState, mergeStrategy);
};
var argument3 = r_1;
var argument4 = null;
var argument5 = function (background) {
 callbackArguments.push(arguments) 

    var rule = background.rule;
    var declarations = rule.declarations.reduce(function (declarations, declaration) {
            declarations.push(declaration);
            if (declaration == background.declaration) {
                declaration.value = declaration.value.replace(urlPattern, 'url(' + sprite.data + ')');
            }
            return declarations;
        }, []);
    rule.declarations = declarations;
    rules.push(rule);
};
var argument6 = function (Plugin) {
 callbackArguments.push(arguments) 

    var plugin = new Plugin(_this.core);
    _this.core.addPlugin(plugin);
    _this.setupExternalInterface(plugin);
};
var argument7 = false;
var base_0 = [242,618,126,627,126,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,618,126,627,126,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,618,126,627,126,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,618,126,627,126,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test866.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)