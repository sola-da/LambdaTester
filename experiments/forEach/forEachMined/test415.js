





var callbackArguments = [];
var argument1 = function (callback, event) {
 callbackArguments.push(arguments) 

    if (graphEvents.indexOf(String(event)) >= 0) {
        graph.on(event, callback);
    }
};
var argument2 = true;
var argument3 = function (a) {
 callbackArguments.push(arguments) 

    if (typeof a === 'string') {
        recs.push('"' + a + '"');
    } else if (typeof a === 'function') {
        recs.push(a.toString().split('()')[0].substring(9));
    } else {
        recs.push(a.toString());
    }
};
var argument4 = function (subFold) {
 callbackArguments.push(arguments) 

    fold.addSubFold(subFold);
};
var argument5 = function (foldDelta) {
 callbackArguments.push(arguments) 

    this.addFolds(foldDelta.folds);
};
var argument6 = null;
var argument7 = true;
var base_0 = ["l","dgE?","52_","W","L4I"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","dgE?","52_","W","L4I"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","dgE?","52_","W","L4I"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","dgE?","52_","W","L4I"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test415.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)