





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (!(key in PouchAlt)) {
        PouchAlt[key] = PouchDB[key];
    }
};
var argument2 = function (model) {
 callbackArguments.push(arguments) 

    if (!visited[model.cid]) {
        model.onLoad(options, visited);
    }
};
var argument3 = null;
var argument4 = function (fold) {
 callbackArguments.push(arguments) 

    this.removeFold(fold);
};
var argument5 = "t";
var argument6 = function (data) {
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
var argument7 = 823;
var base_0 = [-1,607,460,0,122,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,607,460,0,122,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,607,460,0,122,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,607,460,0,122,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test41.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)