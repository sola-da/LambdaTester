





var callbackArguments = [];
var argument1 = function (col) {
 callbackArguments.push(arguments) 

    return generateHashMap(col);
};
var argument2 = null;
var argument3 = 157;
var argument4 = function (v, i) {
 callbackArguments.push(arguments) 

    return {
        index: i,
        x: v[0],
        y: v[1]
    };
};
var argument5 = false;
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    return e.toCSS();
};
var argument7 = r_2;
var argument8 = 9.047798049230316e+305;
var argument9 = function (foldLine) {
 callbackArguments.push(arguments) 

    var folds = foldLine.folds.map(function (fold) {
            return fold.clone();
        });
    return new FoldLine(fd, folds);
};
var argument10 = false;
var base_0 = [893,783,100,403,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,783,100,403,783]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,783,100,403,783]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,783,100,403,783]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test478.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)