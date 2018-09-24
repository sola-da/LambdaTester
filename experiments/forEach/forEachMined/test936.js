





var callbackArguments = [];
var argument1 = function (entity) {
 callbackArguments.push(arguments) 

    var serverKeys = [];
    var aspect = entity.entityAspect;
    __objectForEach(aspect._validationErrors, function (key, ve) {
        if (ve.isServerError)
            serverKeys.push(key);
    });
    if (serverKeys.length === 0)
        return;
    aspect._processValidationOpAndPublish(function () {
        serverKeys.forEach(function (key) {
            aspect._removeValidationError(key);
        });
    });
};
var argument2 = ["o"];
var argument3 = {"783":618,"":893};
var argument4 = function (optKey) {
 callbackArguments.push(arguments) 

    delete subOpts[optKey];
};
var argument5 = function (node) {
 callbackArguments.push(arguments) 

    var data = support.getData(node, 'carousel');
    var action = typeof option === 'string' ? option : options.slide;
    if (!data) {
        support.setData(node, 'carousel', data = new Carousel(node, options));
    }
    if (typeof option === 'number') {
        data.to(option);
    } else if (action) {
        data[action].call(data);
    }
};
var argument6 = null;
var argument7 = [893,157,627];
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    if (d[column] === '')
        return;
    total.push(+d[column]);
};
var argument9 = null;
var base_0 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test936.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)