





var callbackArguments = [];
var argument1 = function (deployment) {
 callbackArguments.push(arguments) 

    var indexDoc = _.defaults({
            docType: 'indexPage',
            areas: areas
        }, deployment);
    indexDoc.id = 'index' + (deployment.name === 'default' ? '' : '-' + deployment.name);
    docs.push(indexDoc);
};
var argument2 = function (event) {
 callbackArguments.push(arguments) 

    SVG.Element.prototype[event] = function (f) {
        var self = this;
        this.node['on' + event] = typeof f == 'function' ? function () {
            return f.apply(self, arguments);
        } : null;
        return this;
    };
};
var argument3 = null;
var argument4 = function (length) {
 callbackArguments.push(arguments) 

    var offsetProp = pvc_Offset.namesSizeToOffset[length], offsetValue = this[offsetProp];
    if (null != offsetValue)
        if ('number' == typeof offsetValue)
            offset[offsetProp] = offsetValue;
        else if (refSize) {
            var refLength = refSize[length];
            null != refLength && (offset[offsetProp] = offsetValue.resolve(refLength));
        }
};
var argument5 = function (s) {
 callbackArguments.push(arguments) 

    map[s.name.toLowerCase()] = s;
    map[s.operator.toLowerCase()] = s;
    if (s.aliases) {
        s.aliases.forEach(function (alias) {
            map[alias.toLowerCase()] = s;
        });
    }
};
var argument6 = {"0":"TnS","1.7278878898460417e+308":"9"};
var base_0 = [714,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test113.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)