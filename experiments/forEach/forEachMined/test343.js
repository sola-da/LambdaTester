





var callbackArguments = [];
var argument1 = function (marker) {
 callbackArguments.push(arguments) 

    return _this.remove(marker);
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function (plot) {
 callbackArguments.push(arguments) 

    this._collectPlotAxesDataCells(plot, dataCellsByAxisTypeThenIndex);
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    if (!(item[0] in WSHModule)) {
        WSHModule[item[0]] = item[1];
    }
};
var argument6 = r_2;
var argument7 = function (obj) {
 callbackArguments.push(arguments) 

    obj.disabled = datepickerCtrl.isDisabled(obj.date, mode);
};
var argument8 = r_1;
var argument9 = r_1;
var base_0 = [783,823,5e-324,242,49,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,823,5e-324,242,49,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,823,5e-324,242,49,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,823,5e-324,242,49,82]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test343.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)