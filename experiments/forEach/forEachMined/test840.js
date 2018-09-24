





var callbackArguments = [];
var argument1 = function (linkChildData) {
 callbackArguments.push(arguments) 

    linkChildData.clearVirtuals();
};
var argument2 = null;
var argument3 = function (anchor) {
 callbackArguments.push(arguments) 

    anchor.markerId = session.addMarker(new Range(anchor.row, anchor.column, anchor.row, anchor.column + _self.length), _self.othersClass, null, false);
    anchor.on('change', function (event) {
        session.removeMarker(anchor.markerId);
        anchor.markerId = session.addMarker(new Range(event.value.row, event.value.column, event.value.row, event.value.column + _self.length), _self.othersClass, null, false);
    });
};
var argument4 = null;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    item.submitValue = true;
    item.allowBlank = false;
};
var argument6 = function (field) {
 callbackArguments.push(arguments) 

    field.setDisabled(newDisabled);
};
var argument7 = true;
var argument8 = {"4":705,"":"GY","$+P":705};
var base_0 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test840.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)