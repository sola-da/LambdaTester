





var callbackArguments = [];
var argument1 = function (c, i) {
 callbackArguments.push(arguments) 

    var test = d3plus.util.copy(d);
    test.geometry.coordinates = [test.geometry.coordinates[i]];
    var a = vars.path.area(test);
    if (a == areas[areas.length - 1]) {
        largest.geometry.coordinates = test.geometry.coordinates;
    }
    return a >= d3.quantile(areas, 0.9);
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return isBarType(d);
};
var argument3 = r_1;
var argument4 = r_1;
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    if (e.entityAspect.entityManager !== em) {
        throw new Error('Only entities in this entityManager may be saved');
    }
    return !e.entityAspect.entityState.isDetached();
};
var argument6 = true;
var argument7 = {"25":"G","59":"","122":"&7","705":"O<*{|","1.608377125191976e+308":618,"1.320530153270747e+308":"Nb","":4.651687201076221e+307,"X":"V","1.5471128757002982e+308":2.254425808519562e+307,"9.94707290710536e+307":9.674640083203658e+307};
var argument8 = function () {
 callbackArguments.push(arguments) 

    return this.selected;
};
var argument9 = r_2;
var argument10 = {"x":122};
var base_0 = ["|","Sl","B`","t","#"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","Sl","B`","t","#"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","Sl","B`","t","#"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","Sl","B`","t","#"]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test600.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)