





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    if (a.indexOf(e) < 0)
        a.push(e);
};
var argument2 = function (add) {
 callbackArguments.push(arguments) 

    if (add.entityAspect.entityState.isDetached()) {
        relationArray._inProgress = true;
        try {
            entityManager.attachEntity(add, EntityState.Added);
        } finally {
            relationArray._inProgress = false;
        }
    }
};
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    file = path.resolve(file);
    suite.emit('pre-require', global, file);
    suite.emit('require', require(file), file);
    suite.emit('post-require', global, file);
};
var argument4 = function (data) {
 callbackArguments.push(arguments) 

    $.fn[data.name] = function () {
        var elems = [];
        this.each(function () {
            var shadowData = elementData(this, 'shadowData');
            var elem = shadowData && shadowData[data.prop] || this;
            if ($.inArray(elem, elems) == -1) {
                elems.push(elem);
            }
        });
        return this.pushStack(elems);
    };
};
var argument5 = null;
var base_0 = [607,":j","yI",1.7976931348623157e+308,126,627,82,"U",0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,":j","yI",1.7976931348623157e+308,126,627,82,"U",0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,":j","yI",1.7976931348623157e+308,126,627,82,"U",0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,":j","yI",1.7976931348623157e+308,126,627,82,"U",0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test265.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)