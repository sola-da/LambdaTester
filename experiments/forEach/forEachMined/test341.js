





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (dict[key] === value) {
        found = true;
    }
};
var argument2 = null;
var argument3 = function (msg) {
 callbackArguments.push(arguments) 

    if (message.text === msg.text && message.severity === msg.severity) {
        found = true;
    }
};
var argument4 = function (object) {
 callbackArguments.push(arguments) 

    var stringObject = JSON.stringify(object).toLowerCase();
    if (stringObject.match(searchTerm.toLowerCase()))
        filteredList.push(object);
};
var argument5 = null;
var argument6 = true;
var argument7 = function (id) {
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
var base_0 = ["F","NX6B[Q82hU","#x","<","80)Q|","K","Q"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F","NX6B[Q82hU","#x","<","80)Q|","K","Q"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F","NX6B[Q82hU","#x","<","80)Q|","K","Q"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","NX6B[Q82hU","#x","<","80)Q|","K","Q"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test341.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)