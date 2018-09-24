





var callbackArguments = [];
var argument1 = function (data) {
 callbackArguments.push(arguments) 

    $.fn[data.name] = function () {
        var elems = [];
        this.each(function () {
            var shadowData = elementData(this, 'shadowData');
            var elem = shadowData && shadowData[data.prop] || this;
            if ($.inArray(elem, elems) == -1) {
                elems.push(elem);
            }
        });
        return this.pushStack(elems);
    };
};
var argument2 = null;
var argument3 = "";
var argument4 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument5 = null;
var argument6 = function (key, value) {
 callbackArguments.push(arguments) 

    values.push(value);
};
var argument7 = {"2.573036140928571e+307":"n3","1.7976931348623157e+308":"O","'":"","P":7.567077773952565e+307,"@":1.3486321037208851e+308,"Y5":49,":":1.4976766634185945e+308,"":4.431321534465426e+307,"6.427935025681595e+307":0};
var argument8 = [-100,843,")",-1,"("];
var argument9 = function (foldDelta) {
 callbackArguments.push(arguments) 

    this.addFolds(foldDelta.folds);
};
var argument10 = false;
var base_0 = ["a","[","K","e"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a","[","K","e"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a","[","K","e"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a","[","K","e"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test945.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)