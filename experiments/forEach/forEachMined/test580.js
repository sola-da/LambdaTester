





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    if (!isDefined($stateParams[key]) || $stateParams[key] !== value) {
        validParams = false;
    }
};
var argument2 = function (err) {
 callbackArguments.push(arguments) 

    main_callback(true);
};
var argument3 = 82;
var argument4 = null;
var argument5 = function (np) {
 callbackArguments.push(arguments) 

    var inverseNp = np.inverse;
    var fkNames = inverseNp ? inverseNp.foreignKeyNames : np.invForeignKeyNames;
    if (fkNames.length === 0)
        return;
    var npValue = parent.getProperty(np.name);
    var fkName = fkNames[propertyIx];
    if (np.isScalar) {
        if (!npValue)
            return;
        npValue.setProperty(fkName, newValue);
    } else {
        npValue.forEach(function (iv) {
            iv.setProperty(fkName, newValue);
        });
    }
};
var argument6 = function (np) {
 callbackArguments.push(arguments) 

    var related = entity.getProperty(np.name);
    if (np.isScalar) {
        if (!related)
            return;
        em.attachEntity(related, entityState, mergeStrategy);
    } else {
        related.forEach(function (e) {
            em.attachEntity(e, entityState, mergeStrategy);
        });
    }
};
var argument7 = "";
var argument8 = r_1;
var base_0 = ["Q-","#)H`"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q-","#)H`"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q-","#)H`"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q-","#)H`"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test580.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)