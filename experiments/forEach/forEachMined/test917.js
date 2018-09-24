





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    if (file.indexOf(field.jsFunctionName) < 0 && fieldIgnores.indexOf(field.jsFunctionName < 0)) {
        fieldsResult.push(field.jsFunctionName);
    }
};
var argument2 = true;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    obj[item] = true;
};
var argument4 = true;
var argument5 = function (wire) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < self.numPieces; ++i) {
        self.pieces[i] += wire.peerPieces.get(i);
    }
};
var argument6 = r_0;
var argument7 = [0,";D",705,49,"w","^"];
var argument8 = function (klass, i) {
 callbackArguments.push(arguments) 

    activeClassName += (i > 0 ? ' ' : '') + klass + '-active';
};
var argument9 = "";
var argument10 = 6.326200700681226e+307;
var base_0 = [627,607,49,82,783,607,460,157,460,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,607,49,82,783,607,460,157,460,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,607,49,82,783,607,460,157,460,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,607,49,82,783,607,460,157,460,783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test917.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)