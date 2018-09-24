





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    counter--;
    if (counter === 0)
        template = template.concat(key, '</ul>');
    else
        template = template.concat(key);
};
var argument2 = r_0;
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    if (file.match(new RegExp(regexp))) {
        if (!pushFile(path.normalize(dirname + '/' + file), basename))
            return;
        if (options.recursive) {
            var pp = dirname + '/' + file;
            if (fs.lstatSync(pp).isDirectory())
                list = list.concat(_ls('-R' + (options.all ? 'A' : ''), pp + '/*'));
        }
    }
};
var argument4 = function (dimInfo) {
 callbackArguments.push(arguments) 

    var dimName = dimInfo.name, spec = dimInfo.spec;
    spec = pvc.data.DimensionType.extendSpec(dimName, spec, translOptions);
    complexType.addDimension(dimName, spec);
};
var argument5 = null;
var argument6 = false;
var argument7 = function (animationFactory) {
 callbackArguments.push(arguments) 

    var created = registerAnimation(animationFactory, animationEvent);
    if (!created && isSetClassOperation) {
        registerAnimation(animationFactory, 'addClass');
        registerAnimation(animationFactory, 'removeClass');
    }
};
var argument8 = null;
var base_0 = [49,714,213,213,213,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,714,213,213,213,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,714,213,213,213,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,714,213,213,213,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test548.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)