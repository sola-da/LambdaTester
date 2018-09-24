





var callbackArguments = [];
var argument1 = function (viewDBName) {
 callbackArguments.push(arguments) 

    viewsToStatus[viewDBName] = viewsToStatus[viewDBName] || statusIsGood;
};
var argument2 = function (entity) {
 callbackArguments.push(arguments) 

    if (entity != null) {
        if (entity.getProperty(fkPropName) == oldValue) {
            entity.setProperty(fkPropName, newValue);
        }
    }
};
var argument3 = null;
var argument4 = function (subFold) {
 callbackArguments.push(arguments) 

    fold.subFolds.push(subFold.clone());
};
var argument5 = r_0;
var argument6 = true;
var argument7 = function (x, callback) {
 callbackArguments.push(arguments) 

    iterator(x, function (v) {
        if (v) {
            main_callback(true);
            main_callback = function () {
            };
        }
        callback();
    });
};
var argument8 = null;
var base_0 = [627,5e-324,460,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,5e-324,460,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,5e-324,460,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,5e-324,460,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test653.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)