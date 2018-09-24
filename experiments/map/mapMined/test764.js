





var callbackArguments = [];
var argument1 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.value;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (row) {
 callbackArguments.push(arguments) 

    var val = row.value;
    var docId = val && typeof val === 'object' && val._id || row.id;
    return view.sourceDB.get(docId).then(function (joinedDoc) {
        row.doc = joinedDoc;
    }, function () {
    });
};
var argument5 = null;
var argument6 = {"705":"","":1.4805471927194765e+306,"9v":"","Y":"+f2l","-1":893};
var argument7 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument8 = [0,607,893];
var argument9 = function (i) {
 callbackArguments.push(arguments) 

    return parseInt(i, 10);
};
var base_0 = [49,242,"UR","Q",969,5e-324,"J&"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,242,"UR","Q",969,5e-324,"J&"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test764.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)