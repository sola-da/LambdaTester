





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument2 = function (result) {
 callbackArguments.push(arguments) 

    return Highlight.allFold(result.text, queryChars);
};
var argument3 = function (m) {
 callbackArguments.push(arguments) 

    return m.principalId;
};
var argument4 = function () {
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
var argument5 = r_3;
var argument6 = r_1;
var base_0 = [403,25,0,460,705,705,403,49,893,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,25,0,460,705,705,403,49,893,714]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,25,0,460,705,705,403,49,893,714]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test300.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)