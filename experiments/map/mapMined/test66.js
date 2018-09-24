





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = null;
var argument3 = function (i) {
 callbackArguments.push(arguments) 

    return 'this._stride' + i + '*i' + i;
};
var argument4 = null;
var argument5 = function (propName) {
 callbackArguments.push(arguments) 

    var prop = __arrayFirst(parentType.getProperties(), __propEq(key, propName));
    if (prop) {
        parentType = prop.isNavigationProperty ? prop.entityType : prop.dataType;
    } else if (throwIfNotFound) {
        throw new Error('unable to locate property: ' + propName + ' on entityType: ' + parentType.name);
    } else {
        ok = false;
    }
    return prop;
};
var argument6 = true;
var argument7 = function () {
 callbackArguments.push(arguments) 

    var parent = this.offsetParent || document.body;
    while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css('position') == 'static')
        parent = parent.offsetParent;
    return parent;
};
var base_0 = [242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242]
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
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test66.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)