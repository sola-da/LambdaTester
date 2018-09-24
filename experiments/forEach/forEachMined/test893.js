





var callbackArguments = [];
var argument1 = function (tree) {
 callbackArguments.push(arguments) 

    toVisit.push({
        pos: tree.pos,
        ids: tree.ids
    });
};
var argument2 = null;
var argument3 = function (name) {
 callbackArguments.push(arguments) 

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
};
var argument4 = "";
var argument5 = function (el) {
 callbackArguments.push(arguments) 

    bower[el] = pkg[el];
    jqConfig[el] = pkg[el];
};
var argument6 = false;
var argument7 = null;
var argument8 = function (sym) {
 callbackArguments.push(arguments) 

    sym.validatorCtor = getValidatorCtor(sym);
};
var argument9 = 655;
var argument10 = {"":""};
var base_0 = [59,618,655,59,82,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,618,655,59,82,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,618,655,59,82,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,618,655,59,82,49]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test893.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)