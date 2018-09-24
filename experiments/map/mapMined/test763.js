





var callbackArguments = [];
var argument1 = function (model) {
 callbackArguments.push(arguments) 

    var opts = _.defaults({
            error: function () {
                model.trigger('destroy', model, model.collection, options);
                options.error && options.error.apply(model, arguments);
            }
        }, options);
    return model.fetch(opts);
};
var argument2 = true;
var argument3 = true;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument6 = 607;
var argument7 = true;
var argument8 = function (fn, callback) {
 callbackArguments.push(arguments) 

    if (fn) {
        fn(function (err) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length <= 1) {
                args = args[0];
            }
            callback.call(null, err, args || null);
        });
    }
};
var argument9 = 714;
var base_0 = [0,-100,969,-100,460,893,-100,5e-324,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,-100,969,-100,460,893,-100,5e-324,893]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,-100,969,-100,460,893,-100,5e-324,893]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,-100,969,-100,460,893,-100,5e-324,893]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test763.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)