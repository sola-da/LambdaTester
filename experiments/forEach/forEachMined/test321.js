





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    jWorkflow.order(f).start(join);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (signal) {
 callbackArguments.push(arguments) 

    signal.remove();
};
var argument5 = true;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    stack.push(value);
    send(callback());
    stack.pop();
};
var argument7 = function (datum, index) {
 callbackArguments.push(arguments) 

    var trendX = funX(datum);
    if (trendX) {
        var trendY = trendModel.sample(trendX, funY(datum), index);
        if (null != trendY) {
            var atoms = def.set(Object.create(serData.atoms), xDimName, trendX, yDimName, trendY, dataPartDimName, dataPartAtom);
            newDatums.push(new pvc.data.TrendDatum(data.owner, atoms, trendOptions));
        }
    }
};
var argument8 = null;
var base_0 = ["<;","u","v"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<;","u","v"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<;","u","v"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<;","u","v"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test321.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)