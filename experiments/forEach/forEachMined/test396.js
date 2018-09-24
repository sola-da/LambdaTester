





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument2 = false;
var argument3 = {"122":9.84003396721203e+307,"126":-1,"":"","7]r":"","2.7226108675476254e+307":8.803986829384655e+307,"6.386043247829383e+307":"z","*xg7{<":5.720262588764512e+307};
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < targets.length; i++) {
        if (d.id === targets[i].id) {
            d.values = targets[i].values;
            targets.splice(i, 1);
            break;
        }
    }
};
var argument5 = null;
var argument6 = function (id) {
 callbackArguments.push(arguments) 

    if (this.globals[id].activate) {
        _counter[id]--;
        if (_counter[id] == 0) {
            this.globals[id].deactivate();
        }
    }
};
var argument7 = function (et) {
 callbackArguments.push(arguments) 

    _run(et);
};
var argument8 = null;
var base_0 = ["i","i4","w",655,"B","%","B","LE","cD"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","i4","w",655,"B","%","B","LE","cD"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","i4","w",655,"B","%","B","LE","cD"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i","i4","w",655,"B","%","B","LE","cD"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test396.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)