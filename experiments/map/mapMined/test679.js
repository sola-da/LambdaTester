





var callbackArguments = [];
var argument1 = function (val) {
 callbackArguments.push(arguments) 

    var node = keyMap[val];
    return node.isDescendantOf(rootNode) ? node : null;
};
var argument2 = true;
var argument3 = function (word) {
 callbackArguments.push(arguments) 

    return {
        name: word,
        value: word,
        score: 0,
        meta: 'keyword'
    };
};
var argument4 = null;
var argument5 = function (num) {
 callbackArguments.push(arguments) 

    return num !== index ? num : null;
};
var argument6 = null;
var argument7 = function (langPair) {
 callbackArguments.push(arguments) 

    langPair = langPair.split('=');
    return {
        name: langPair[0],
        value: langPair[1]
    };
};
var argument8 = null;
var argument9 = true;
var base_0 = ["b","s","7pN"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b","s","7pN"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b","s","7pN"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test679.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)