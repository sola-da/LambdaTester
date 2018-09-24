





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    if (!found && t.data.id === d.data.id) {
        found = true;
        d = t;
    }
};
var argument2 = true;
var argument3 = function (colGroup, cg) {
 callbackArguments.push(arguments) 

    this._colGroups[cg] = [colGroup];
    this._colGroupsIndexes[cg] = [R + cg];
};
var argument4 = true;
var argument5 = true;
var argument6 = function (anchor) {
 callbackArguments.push(arguments) 

    anchor.markerId = session.addMarker(new Range(anchor.row, anchor.column, anchor.row, anchor.column + _self.length), _self.othersClass, null, false);
    anchor.on('change', function (event) {
        session.removeMarker(anchor.markerId);
        anchor.markerId = session.addMarker(new Range(event.value.row, event.value.column, event.value.row, event.value.column + _self.length), _self.othersClass, null, false);
    });
};
var argument7 = [655,0,823,783,122,1.7976931348623157e+308,49,618,122];
var argument8 = function (doc) {
 callbackArguments.push(arguments) 

    if (doc.area) {
        areas[doc.area] = doc.area;
    }
};
var base_0 = ["H","1"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H","1"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H","1"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H","1"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test763.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)