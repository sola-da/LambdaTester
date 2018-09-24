





var callbackArguments = [];
var argument1 = function (domain) {
 callbackArguments.push(arguments) 

    wellKnownDomains[domain] = currentKey.toLowerCase().trim();
};
var argument2 = true;
var argument3 = null;
var argument4 = function (eg) {
 callbackArguments.push(arguments) 

    if (!eg)
        return;
    var entities = eg.getEntities(entityStates);
    if (selected) {
        selected.push.apply(selected, entities);
    } else {
        selected = entities;
    }
};
var argument5 = true;
var argument6 = function (stuff) {
 callbackArguments.push(arguments) 

    numbers.forEach(function (number) {
        model.compareThings(number, stuff).should.equal(-1);
        model.compareThings(stuff, number).should.equal(1);
    });
};
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    item = path.join(dir, item);
    remove.removeSync(item);
};
var argument8 = r_1;
var argument9 = r_1;
var base_0 = [100,242,714,5e-324,59,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,242,714,5e-324,59,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,242,714,5e-324,59,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,242,714,5e-324,59,59]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test665.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)