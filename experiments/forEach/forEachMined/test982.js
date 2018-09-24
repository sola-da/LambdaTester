





var callbackArguments = [];
var argument1 = function (path) {
 callbackArguments.push(arguments) 

    if (parts.indexOf(path) !== -1)
        return;
    bad = true;
};
var argument2 = ["Tgu","5y","Sb","q","#"];
var argument3 = function (node) {
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
var argument4 = null;
var argument5 = function (path) {
 callbackArguments.push(arguments) 

    if (!fs.existsSync(path)) {
        if (!options.quiet)
            cli.fail('No such include directory: ' + path);
        return pbjs.STATUS_ERR_INCLUDE_DIR;
    }
};
var argument6 = 5.24588615475419e+307;
var argument7 = function (k) {
 callbackArguments.push(arguments) 

    current[k] = conf[k];
};
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test982.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)