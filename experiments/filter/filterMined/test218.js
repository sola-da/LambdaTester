





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return this.globals[id].activate && bound.globals.indexOf(id) === -1;
};
var argument2 = true;
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    return /\.json$/.test(file);
};
var argument4 = {"":157,"8.935083711567212e+307":403,"1.7169248976936618e+307":2.9752756153898e+307,"c":";","t":403,"UN":-1,"@":"","(7":"i","2.4669632337910925e+307":"c<","O":1.78436704435907e+308};
var argument5 = function (c, i) {
 callbackArguments.push(arguments) 

    var test = d3plus.util.copy(d);
    test.geometry.coordinates = [test.geometry.coordinates[i]];
    var a = vars.path.area(test);
    if (a >= vars.coords.threshold) {
        areas.push(a);
        return true;
    }
    return false;
};
var argument6 = function (gravatarService) {
 callbackArguments.push(arguments) 

    return function (email, size) {
        if (!email) {
            return gravatarService.url('', {
                default: 'mm',
                size: size
            });
        }
        return gravatarService.url(email, {
            default: 'wavatar',
            size: size
        });
    };
};
var argument7 = "MF";
var base_0 = [403,714,403,213,893,157,893,460,893,627]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,714,403,213,893,157,893,460,893,627]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test218.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)