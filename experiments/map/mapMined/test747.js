





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.slice();
};
var argument2 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument3 = function (pvalue) {
 callbackArguments.push(arguments) 

    var result = StringMatch.stringMatch(pvalue.text || pvalue, valueNeedle, stringMatcherOptions);
    if (result) {
        if (pvalue.color) {
            result.color = pvalue.color;
        }
        return result;
    }
};
var argument4 = null;
var argument5 = function (foldLine) {
 callbackArguments.push(arguments) 

    var folds = foldLine.folds.map(function (fold) {
            return fold.clone();
        });
    return new FoldLine(fd, folds);
};
var argument6 = 1.3622614800127408e+308;
var argument7 = r_2;
var base_0 = [49,403,82,25,705,823,157,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,403,82,25,705,823,157,595]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test747.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)