





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    if (!Buffer.prototype[method])
        return;
    MongooseBuffer.prototype[method] = new Function('var ret = Buffer.prototype.' + method + '.apply(this, arguments);' + 'this._markModified();' + 'return ret;');
};
var argument2 = [655,1.7976931348623157e+308,655];
var argument3 = [618,714,705,595,460,242,714,655,213];
var argument4 = function (type) {
 callbackArguments.push(arguments) 

    _remove(element.target, gesture.defaultEvent + '.' + type);
};
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    cli.log('                             ' + util.pad(key, 10) + '   ' + pbjs.targets[key].description);
};
var argument6 = 823;
var argument7 = function (resp) {
 callbackArguments.push(arguments) 

    if (resp.error)
        return resp.error(err);
};
var argument8 = 1.5460356680476663e+308;
var base_0 = [122,655,122,618,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,655,122,618,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,655,122,618,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,655,122,618,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test859.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)