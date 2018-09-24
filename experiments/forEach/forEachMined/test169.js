





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    addCache(d.id_org, d);
};
var argument2 = [25,213,82,607];
var argument3 = function (item, i) {
 callbackArguments.push(arguments) 

    this[item[0]] = item[1](WScript.Arguments.Item(i));
};
var argument4 = function (option) {
 callbackArguments.push(arguments) 

    if (option.selected) {
        array.push(option.value);
    }
};
var argument5 = r_2;
var argument6 = r_0;
var argument7 = function (relatedEntity) {
 callbackArguments.push(arguments) 

    if (typeof relatedEntity === 'function') {
        mc.deferredFns.push(function () {
            relatedEntity = relatedEntity();
            updateRelatedEntityInCollection(relatedEntity, originalRelatedEntities, targetEntity, inverseProperty);
        });
    } else {
        updateRelatedEntityInCollection(relatedEntity, originalRelatedEntities, targetEntity, inverseProperty);
    }
};
var argument8 = r_2;
var argument9 = 1.7793511480058537e+308;
var base_0 = [213,122,"]",25,"GB",-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,122,"]",25,"GB",-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,122,"]",25,"GB",-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,122,"]",25,"GB",-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test169.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)