





var callbackArguments = [];
var argument1 = function (np) {
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
var argument2 = function (b) {
 callbackArguments.push(arguments) 

    var tr = resultsTable.insertRow(-1);
    var assignedTo = b.assigned_to.name;
    if (assignedTo === 'nobody') {
        tr.classList.add('unassigned');
    }
    addColumn(tr, versionBadge(b.blocks));
    addColumn(tr, linkBug(b.id));
    addColumn(tr, linkBug(b.id, b.summary));
    addColumn(tr, assignedTo);
    addColumn(tr, b.last_change_time);
};
var argument3 = "";
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    internalValues[key] = defaults[key];
    Object.defineProperty(values, key, {
        get: function () {
            return internalValues[key];
        },
        configurable: false,
        enumerable: true
    });
};
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    value[i] = parseFloat(v, 10);
};
var argument6 = [242,627,126,460,5e-324,705];
var argument7 = 595;
var base_0 = ["B",157,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B",157,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B",157,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B",157,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test211.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)