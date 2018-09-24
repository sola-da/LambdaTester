





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return gonzales.csspToSrc(traverse(x));
};
var argument2 = function (model) {
 callbackArguments.push(arguments) 

    var opts = _.defaults({
            error: function () {
                model.trigger('destroy', model, model.collection, options);
                options.error && options.error.apply(model, arguments);
            }
        }, options);
    return model.fetch(opts);
};
var argument3 = true;
var argument4 = 3.4507431227112974e+306;
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument6 = function (text) {
 callbackArguments.push(arguments) 

    var len = pv.Text.measureWidth(text, font);
    len > max && (max = len);
    return len;
};
var argument7 = true;
var base_0 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test588.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)