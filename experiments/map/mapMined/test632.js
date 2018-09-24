





var callbackArguments = [];
var argument1 = function (hit) {
 callbackArguments.push(arguments) 

    return hit._source;
};
var argument2 = "$[";
var argument3 = function (child) {
 callbackArguments.push(arguments) 

    return child.gWin;
};
var argument4 = null;
var argument5 = [25,403];
var argument6 = function (rev) {
 callbackArguments.push(arguments) 

    return quote(docId + '::' + rev);
};
var argument7 = function (attachment, index) {
 callbackArguments.push(arguments) 

    index = index + 1;
    attachment.set('menuOrder', index);
    return [
        attachment.id,
        index
    ];
};
var base_0 = ["$","Fb","v","i","R",";Zy5"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test632.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)