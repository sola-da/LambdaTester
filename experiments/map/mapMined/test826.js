





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var styleInfo = this, dfd = $.Deferred(), opts = $.extend({}, o, {
            queue: false,
            complete: function () {
                dfd.resolve(styleInfo);
            }
        });
    this.el.animate(this.diff, opts);
    return dfd.promise();
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var base_0 = ["X","+!"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X","+!"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test826.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)