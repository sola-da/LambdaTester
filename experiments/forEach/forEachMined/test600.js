





var callbackArguments = [];
var argument1 = function (rev) {
 callbackArguments.push(arguments) 

    addToMissing(id, rev);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    result[key] = this.getOption(key);
};
var argument3 = r_1;
var argument4 = r_1;
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
var argument6 = true;
var argument7 = {"25":"G","59":"","122":"&7","705":"O<*{|","1.608377125191976e+308":618,"1.320530153270747e+308":"Nb","":4.651687201076221e+307,"X":"V","1.5471128757002982e+308":2.254425808519562e+307,"9.94707290710536e+307":9.674640083203658e+307};
var argument8 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.destroy();
};
var argument9 = r_2;
var argument10 = {"x":122};
var base_0 = ["|","Sl","B`","t","#"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","Sl","B`","t","#"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","Sl","B`","t","#"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","Sl","B`","t","#"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test600.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)