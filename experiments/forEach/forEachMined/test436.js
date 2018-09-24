





var callbackArguments = [];
var argument1 = function (view, name) {
 callbackArguments.push(arguments) 

    if (name.indexOf('@') < 0)
        name += '@' + state.parent.name;
    views[name] = view;
};
var argument2 = function (a) {
 callbackArguments.push(arguments) 

    var id = a.substring(3, a.length);
    if (id.charAt(0) == '"' && id.charAt(id.length - 1) == '"') {
        id = id.substring(1, id.length - 1);
    }
    var node = e.byId(id);
    if (node && node.tagName.toLowerCase() == 'td') {
        cells.push(node);
    }
};
var argument3 = r_0;
var argument4 = false;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    var reversed = esrever.reverse(item.input);
    equal(reversed, item.expected, item.description);
    equal(esrever.reverse(reversed), item.input, 'Reversing twice: ' + item.description);
};
var argument6 = r_1;
var argument7 = function (element) {
 callbackArguments.push(arguments) 

    out.append(angular.element(element).clone());
};
var base_0 = [403,460,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,460,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,460,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,460,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test436.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)