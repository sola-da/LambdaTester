





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    var height = (items.length + (item.submenu ? item.submenu.length : 0)) * 24;
    me.maxHeight = Math.max(me.maxHeight, height);
};
var argument2 = function (def, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    def.print(output);
};
var argument3 = function (child) {
 callbackArguments.push(arguments) 

    currentChildren.push(child);
    child.setProperty(childToParentNp.name, entity);
};
var argument4 = {"705":"","-100":"","3.0225896104349656e+307":"","X":"","1.5388670536382877e+307":403,"V":"","<":7.152180681931094e+307,"s'$":"<","":""};
var argument5 = true;
var argument6 = function (needle) {
 callbackArguments.push(arguments) 

    if (typeList.indexOf(needle) == -1) {
        hasType = false;
        return false;
    }
};
var argument7 = null;
var base_0 = [25,59,0,242,460,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,59,0,242,460,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,59,0,242,460,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,59,0,242,460,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test504.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)