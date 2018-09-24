





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return Math.atan2(v[0] - cx, v[1] - cy);
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    return {
        'Owner > component': item.componentName,
        'Inclusive time (ms)': roundFloat(item.time),
        'Instances': item.count
    };
};
var argument3 = function (row) {
 callbackArguments.push(arguments) 

    var val = row.value;
    var docId = val && typeof val === 'object' && val._id || row.id;
    return view.sourceDB.get(docId).then(function (joinedDoc) {
        row.doc = joinedDoc;
    }, function () {
    });
};
var argument4 = null;
var argument5 = "";
var argument6 = function () {
 callbackArguments.push(arguments) 

    return domain.alphabet[_.random(0, domain.alphabet.length - 1)];
};
var base_0 = [59,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,627]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,627]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,627]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test958.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)