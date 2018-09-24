





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    var _group = [], isRow = false, isCol = false;
    if (Array.isArray(item.rows)) {
        _group = item.rows;
        isRow = true;
    } else if (Array.isArray(item.cols)) {
        _group = item.cols;
        isCol = true;
    }
    var from = _group[0], to = _group[_group.length - 1];
    if (isRow) {
        groupRows(from, to);
    } else if (isCol) {
        groupCols(from, to);
    }
};
var argument2 = {"":"hP","5.529670315146572e+306":"YT9","vP":""};
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    var err = new AssertionError(null, key);
    if (err.message.indexOf(components[key]) < 0) {
        throw new Error('Expected error of type \'' + components[key] + '\'');
    }
};
var argument4 = null;
var argument5 = function (command) {
 callbackArguments.push(arguments) 

    if (domain.hidden)
        command.hidden = true;
    api[domain.domain + '.' + (command.name || command.id)] = command;
};
var argument6 = 6.394156780392991e+306;
var argument7 = null;
var argument8 = function (child) {
 callbackArguments.push(arguments) 

    child._creating();
};
var base_0 = ["$",607,"5",157,157,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$",607,"5",157,157,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$",607,"5",157,157,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$",607,"5",157,157,49]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test980.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)