





var callbackArguments = [];
var argument1 = function (expr, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    expr.print(output);
};
var argument2 = r_0;
var argument3 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.DirectionalLight.prototype, prop, {
        get: function () {
            return this['_' + prop];
        },
        set: function (n) {
            this['_' + prop] = n;
            this._changedDirection = true;
        }
    });
    enchant.gl.DirectionalLight.prototype[prop] = 0;
};
var argument4 = false;
var argument5 = 1.5036646044311374e+307;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    cli.log('                             ' + util.pad(key, 10) + '   ' + pbjs.sources[key].description);
};
var argument7 = r_2;
var argument8 = function (handle) {
 callbackArguments.push(arguments) 

    var destroyMethodName = 'destroyRecursive' in handle ? 'destroyRecursive' : 'destroy' in handle ? 'destroy' : 'remove';
    var odh = aspect.before(this, 'destroy', function (preserveDom) {
            handle[destroyMethodName](preserveDom);
        });
    var hdh = aspect.after(handle, destroyMethodName, function () {
            odh.remove();
            hdh.remove();
        }, true);
};
var base_0 = [59,0,126,823,0,213,460,157,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,0,126,823,0,213,460,157,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,0,126,823,0,213,460,157,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,0,126,823,0,213,460,157,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test212.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)