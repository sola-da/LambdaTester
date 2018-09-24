





var callbackArguments = [];
var argument1 = function (dp) {
 callbackArguments.push(arguments) 

    var newDp = new DataProperty(dp);
    newDp.validators = [];
    newDp.baseProperty = dp;
    this._addPropertyCore(newDp);
};
var argument2 = function (field) {
 callbackArguments.push(arguments) 

    this[field] = val;
};
var argument3 = false;
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    var axisPanel = axesPanels[id], sizes = sizesMaxByAxisId[id], ol = 'x' === axisPanel.axis.orientation ? 'height' : 'width';
    size = axisPanel[ol];
    size > sizes.axis && (sizes.axis = size);
    var titlePanel = axisPanel.titlePanel;
    if (titlePanel) {
        size = titlePanel[ol];
        size > sizes.title && (sizes.title = size);
    }
};
var argument5 = 2.0669808705907619e+307;
var argument6 = true;
var argument7 = function (x, callback) {
 callbackArguments.push(arguments) 

    iterator(x, function (v) {
        if (!v) {
            main_callback(false);
            main_callback = function () {
            };
        }
        callback();
    });
};
var argument8 = "";
var base_0 = [714,242,893,655,213,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,242,893,655,213,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,242,893,655,213,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,242,893,655,213,25]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test612.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)