





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    return !isEmpty(element.gestures);
};
var argument2 = false;
var argument3 = null;
var argument4 = function (dimName) {
 callbackArguments.push(arguments) 

    var atom = this.atoms[dimName];
    return !(atom instanceof pvc.data.Atom) || null == atom.value;
};
var argument5 = [627];
var argument6 = function (val, key) {
 callbackArguments.push(arguments) 

    return _.str.include(key, term);
};
var argument7 = null;
var argument8 = function () {
 callbackArguments.push(arguments) 

    return $(this).css('z-index') != 'auto';
};
var argument9 = null;
var argument10 = 1.328584767305004e+308;
var base_0 = [126,893,"W","5@7"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,"W","5@7"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,"W","5@7"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,"W","5@7"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test678.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)