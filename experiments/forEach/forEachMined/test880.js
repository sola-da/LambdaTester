





var callbackArguments = [];
var argument1 = function (ps) {
 callbackArguments.push(arguments) 

    ps = ps instanceof Array ? ps : [
        ps,
        ps
    ];
    pvc_installLog(this, '_' + ps[0], ps[1], logId);
};
var argument2 = false;
var argument3 = false;
var argument4 = function (cssClass) {
 callbackArguments.push(arguments) 

    element.className = trim((' ' + element.className + ' ').replace(/[\n\t]/g, ' ').replace(' ' + trim(cssClass) + ' ', ' '));
};
var argument5 = false;
var argument6 = null;
var argument7 = function (write) {
 callbackArguments.push(arguments) 

    items.push({
        id: id,
        type: DOM_OPERATION_TYPES[writ"Error"] || writ"Error",
        args: write.args
    });
};
var argument8 = ["*","j",0,595,">+","d)"];
var argument9 = function (child) {
 callbackArguments.push(arguments) 

    child.setProperty(childToParentNp.name, entity);
};
var argument10 = r_3;
var argument11 = {"213":"","Y":893,"v":"m","4`":126};
var base_0 = [1.7976931348623157e+308,843,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,843,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,843,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,843,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test880.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)