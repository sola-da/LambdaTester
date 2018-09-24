





var callbackArguments = [];
var argument1 = function (param) {
 callbackArguments.push(arguments) 

    if (param.message === 'Identifier' && env[Finder.findESLintEnvForMember(param.name)]) {
        context.report(param, 'Parameter \'${0}\' shadows a global member', {
            0: param.name,
            nls: 'no-shadow-global-param'
        });
    }
};
var argument2 = {"213":49,"403":2.208461208739234e+307,",pI":1.027126184208907e+308,"":705,"|":"","T":"G","1.8120180085002136e+307":1.4506877547765539e+308,"Q{":7.361484079423645e+307};
var argument3 = r_0;
var argument4 = function (fkName) {
 callbackArguments.push(arguments) 

    var fkProp = oldValue.entityType.getProperty(fkName);
    if (!fkProp.isPartOfKey) {
        oldValue.setProperty(fkName, null);
    }
};
var argument5 = 7.911549049446629e+307;
var argument6 = r_1;
var argument7 = function (anEvent) {
 callbackArguments.push(arguments) 

    config['add' + authUtilsProvider.capitalize(anEvent) + 'Handler'] = function (handler) {
        config.on(anEvent, handler);
    };
};
var argument8 = true;
var argument9 = "";
var argument10 = function (el, idx) {
 callbackArguments.push(arguments) 

    trees.push({
        ids: el,
        diff: item.diff - 1,
        parent: item.ids,
        parentIdx: idx
    });
};
var argument11 = r_0;
var argument12 = 607;
var base_0 = ["a",126,100,"D"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a",126,100,"D"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a",126,100,"D"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a",126,100,"D"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test514.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)