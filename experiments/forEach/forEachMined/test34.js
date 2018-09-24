





var callbackArguments = [];
var argument1 = function (item, index) {
 callbackArguments.push(arguments) 

    array[index] = {};
    array[index][key] = item;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (pair) {
 callbackArguments.push(arguments) 

    var splitAt = pair.lastIndexOf(':');
    args.push(pair.substr(0, splitAt));
    parameters.push(pair.substr(splitAt + 1));
};
var argument5 = 618;
var argument6 = 823;
var argument7 = function (cssClass) {
 callbackArguments.push(arguments) 

    element.className = trim((' ' + element.className + ' ').replace(/[\n\t]/g, ' ').replace(' ' + trim(cssClass) + ' ', ' '));
};
var argument8 = "";
var argument9 = function (k, v) {
 callbackArguments.push(arguments) 

    if (k === roomName) {
        found = true;
        return self.executer(_r);
    }
};
var argument10 = null;
var argument11 = "";
var base_0 = [969,25,59,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,25,59,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,25,59,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,25,59,213]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test34.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)