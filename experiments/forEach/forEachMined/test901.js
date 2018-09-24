





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    fn.call(element, { preventDefault: noop });
};
var argument2 = function (Plugin) {
 callbackArguments.push(arguments) 

    var options = assign(_this.options, {
            container: container,
            src: source
        });
    container.addPlugin(new Plugin(options));
};
var argument3 = r_0;
var argument4 = false;
var argument5 = function (option) {
 callbackArguments.push(arguments) 

    if (option.selected) {
        array.push(option.value);
    }
};
var argument6 = function (element, index, array) {
 callbackArguments.push(arguments) 

    var ghFile = element.split(snippetsServer)[1];
    ghFile = ghFile.substr(0, ghFile.length - 1);
    checkScript(ghFile);
};
var base_0 = [0,82,627,823,595,460,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,82,627,823,595,460,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,82,627,823,595,460,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,82,627,823,595,460,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test901.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)