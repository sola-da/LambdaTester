





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    return {
        name: a.name,
        value: a.value.eval(env)
    };
};
var argument2 = false;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return this._DT_RowIndex;
};
var argument4 = null;
var argument5 = false;
var argument6 = function (word) {
 callbackArguments.push(arguments) 

    return {
        caption: word,
        value: word,
        score: wordScore[word],
        meta: 'local'
    };
};
var argument7 = function (i) {
 callbackArguments.push(arguments) 

    return 'b' + i;
};
var argument8 = null;
var argument9 = false;
var base_0 = [460,"D","5","9-L","q"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"D","5","9-L","q"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test211.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)