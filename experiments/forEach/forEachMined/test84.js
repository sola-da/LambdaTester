





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    tmp = tmp.concat(_createPart(item, boundary));
};
var argument2 = false;
var argument3 = r_0;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    RemoteStorage.log('[LocalStorage] Removing', key);
    delete localStorage[key];
};
var argument5 = function (text, index) {
 callbackArguments.push(arguments) 

    strings.push('#line 1 ', index.toString(), '\n', text);
};
var argument6 = function (range) {
 callbackArguments.push(arguments) 

    folds = folds.concat(this.getFoldsInRange(range));
};
var base_0 = ["_:Tu;","Q","5","`",",#J"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_:Tu;","Q","5","`",",#J"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_:Tu;","Q","5","`",",#J"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_:Tu;","Q","5","`",",#J"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test84.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)