





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    console.log('Test', name, 'took', ben(150, function () {
        parser.parseComplete(tests[name]);
    }));
};
var argument2 = null;
var argument3 = function (items) {
 callbackArguments.push(arguments) 

    items = items.filter(function (item) {
        return item['rows'];
    });
    if (items.length) {
        var sortedGroup = items.sort(compare('level', 'desc')), lastLevel = sortedGroup[0].level;
        if (level < lastLevel) {
            level = lastLevel;
        }
    }
};
var argument4 = null;
var argument5 = function (trait) {
 callbackArguments.push(arguments) 

    forEach(getOwnPropertyNames(trait), function (name) {
        var pd = trait[name];
        if (hasOwnProperty(newTrait, name) && !newTrait[name].required) {
            if (pd.required) {
                return;
            }
            if (!isSameDesc(newTrait[name], pd)) {
                newTrait[name] = makeConflictingPropDesc(name);
            }
        } else {
            newTrait[name] = pd;
        }
    });
};
var argument6 = r_1;
var argument7 = true;
var argument8 = function (className) {
 callbackArguments.push(arguments) 

    if (className == baseClass) {
        hasBaseClass = true;
    } else if (className) {
        this.setStateFromClassName(container, className, baseClass);
    }
};
var argument9 = [157,"<",213,-100,213,"6",607,"z+Z=%","n"];
var base_0 = [157,714,5e-324,714,49,0,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,714,5e-324,714,49,0,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,714,5e-324,714,49,0,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,714,5e-324,714,49,0,-100]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)