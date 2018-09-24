





var callbackArguments = [];
var argument1 = function (arg, i) {
 callbackArguments.push(arguments) 

    var doc = new self(arg);
    docs[i] = doc;
    doc.save(function (err) {
        if (err)
            return promise.error(err);
        --count || promise.complete.apply(promise, docs);
    });
};
var argument2 = function (field) {
 callbackArguments.push(arguments) 

    self.vary(field);
};
var argument3 = function (field) {
 callbackArguments.push(arguments) 

    if (field in selectDef) {
        delete selectDef[field];
    }
};
var argument4 = 1.5553113410464203e+308;
var argument5 = r_0;
var argument6 = function (id) {
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
var argument7 = "";
var argument8 = "_";
var base_0 = [-1,403,157,49,714,783,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,403,157,49,714,783,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,403,157,49,714,783,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,403,157,49,714,783,893]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test969.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)