





var callbackArguments = [];
var argument1 = function (value, i) {
 callbackArguments.push(arguments) 

    pending++;
    put(store, path.concat([i]), value, cb);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    console.error(key + '\t' + js.data[key].length);
};
var argument3 = r_0;
var argument4 = function (node) {
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
var argument5 = function (range) {
 callbackArguments.push(arguments) 

    if (!range.markerId)
        range.markerId = session.addMarker(range, 'ace_snippet-marker', 'text');
};
var base_0 = [-1,893,893,618,5e-324,655,893,595,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,893,893,618,5e-324,655,893,595,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,893,893,618,5e-324,655,893,595,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,893,893,618,5e-324,655,893,595,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test418.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)