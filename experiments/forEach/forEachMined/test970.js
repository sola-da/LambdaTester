





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
    if (elementData) {
        (elementData.closeAnimationFn || noop)();
    }
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    if (doc.area) {
        areas[doc.area] = doc.area;
    }
};
var argument3 = function (stuff) {
 callbackArguments.push(arguments) 

    dates.forEach(function (date) {
        model.compareThings(date, stuff).should.equal(-1);
        model.compareThings(stuff, date).should.equal(1);
    });
};
var argument4 = function (code) {
 callbackArguments.push(arguments) 

    unops[code] = new Function('x', 'return ' + unop(code) + ' x;');
};
var argument5 = [5e-324,"p#","#","{","8r",460,"9",843];
var argument6 = 1.5074736749561386e+308;
var base_0 = ["[","tw@","0h","y","_f",",LA"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[","tw@","0h","y","_f",",LA"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[","tw@","0h","y","_f",",LA"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[","tw@","0h","y","_f",",LA"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test970.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)