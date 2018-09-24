





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    console.error(key + '\t' + js.data[key].length);
};
var argument2 = function (calcSpec) {
 callbackArguments.push(arguments) 

    complexTypeProj.setCalc(calcSpec);
};
var argument3 = function (datum, index) {
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
var argument4 = null;
var argument5 = function (property) {
 callbackArguments.push(arguments) 

    var name = property.name;
    var type = property.message;
    var loggingMessage = property.loggingMessage;
    if (type == 'attribute') {
        var dummy = Device[name];
    } else {
        Device[name]();
    }
    this.assertErrorInLogs(loggingMessage, 1);
};
var base_0 = [59,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test565.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)