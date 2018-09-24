





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    return 'i' + i;
};
var argument2 = false;
var argument3 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument4 = null;
var argument5 = false;
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    if (r.makeImportant) {
        return r.makeImportant();
    } else {
        return r;
    }
};
var argument7 = r_2;
var argument8 = "rSi";
var argument9 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var base_0 = ["bn?jE{@ohI","bf","h:Ir","M"]
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
var base_2 = ["bn?jE{@ohI","bf","h:Ir","M"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test299.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)