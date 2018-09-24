





var callbackArguments = [];
var argument1 = function (property, i) {
 callbackArguments.push(arguments) 

    data[property] = args[i];
};
var argument2 = function (datum, index) {
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
var argument3 = null;
var argument4 = function (dep) {
 callbackArguments.push(arguments) 

    if (!dep)
        return;
    dep = DEPENDENCIES[dep] || dep;
    var ext = dep.split(/\./).pop();
    if (ext == 'css') {
        properties.head += '<link rel="stylesheet" href="' + dep + '" type="text/css">\n';
    } else if (ext == 'js') {
        properties.head += '<script src="' + dep + '"></script>\n';
    } else {
        properties.module = '="' + dep + '"';
    }
};
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    if (this.hasOwnProperty(name)) {
        theme[name] = this[name];
    }
};
var argument6 = "";
var base_0 = [49,242,126,122,969,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,242,126,122,969,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,242,126,122,969,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,242,126,122,969,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test729.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)