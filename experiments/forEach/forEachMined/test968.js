





var callbackArguments = [];
var argument1 = function (handle) {
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
var argument2 = function (prop) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesProperty(prop == 'src' ? [
        'audio',
        'video',
        'source'
    ] : ['video'], prop, {
        reflect: true,
        propType: 'src'
    });
};
var argument3 = false;
var argument4 = function (_map, _index) {
 callbackArguments.push(arguments) 

    if (_map.id === _name && !isset) {
        isset = true;
        $.setMapImage(_index);
    }
};
var argument5 = false;
var argument6 = function (line) {
 callbackArguments.push(arguments) 

    var line_data;
    if (regex.comment.test(line)) {
        return;
    }
    if (regex.blank.test(line)) {
        return;
    }
    line_data = regex.line.exec(line);
    if (line_data) {
        result.push(line_data[1].trim());
    }
};
var base_0 = [122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test968.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)