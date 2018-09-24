





var callbackArguments = [];
var argument1 = function (pb) {
 callbackArguments.push(arguments) 

    pb.causesPostBack = true;
    return pb;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument3 = {"100":"","595":49,"607":"F)G","705":"","":"","4.9768397522802e+307":-1,"l":242};
var argument4 = function (colpos) {
 callbackArguments.push(arguments) 

    return colpos >= index ? colpos + amount : colpos;
};
var argument5 = function (match) {
 callbackArguments.push(arguments) 

    return function () {
        var handler = match.route.props.handler;
        if (!transition.isAborted && handler.willTransitionTo)
            handler.willTransitionTo(transition, match.params, query);
        var promise = transition.promise;
        delete transition.promise;
        return promise;
    };
};
var argument6 = {"0":"","6":"$","595":"","7.830455573726529e+307":"","f":1.7976931348623157e+308,"g%":"","0+z":"","Xjb":122,"":-1};
var argument7 = null;
var base_0 = [122,969,122,59,618,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,969,122,59,618,59]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,969,122,59,618,59]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test79.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)