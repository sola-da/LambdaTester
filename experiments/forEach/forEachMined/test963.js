





var callbackArguments = [];
var argument1 = function (length) {
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
var argument2 = 122;
var argument3 = function (def) {
 callbackArguments.push(arguments) 

    reportRedeclaration(def.name, def.name.name);
};
var argument4 = true;
var argument5 = function (node) {
 callbackArguments.push(arguments) 

    node.innerHTML = this.getRelativeTime(node.innerHTML);
};
var argument6 = "";
var argument7 = null;
var argument8 = function cb_forEach(ruleJSON) {
 callbackArguments.push(arguments) 

    var rule = new Rule(ruleJSON);
    if (!this.rules.some(function cb_some(r) {
            return deepEqual(r, rule);
        })) {
        this.rules.push(rule);
    }
};
var argument9 = r_2;
var base_0 = [1.7976931348623157e+308,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test963.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)