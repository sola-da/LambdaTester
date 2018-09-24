





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    x = x.clone();
    if (x.start.row == oldStart.row)
        x.start.column += collDiff;
    if (x.end.row == oldStart.row)
        x.end.column += collDiff;
    x.start.row += rowDiff;
    x.end.row += rowDiff;
    return x;
};
var argument2 = {};
var argument3 = null;
var argument4 = function (x, callback) {
 callbackArguments.push(arguments) 

    iterator(x, function (err, criteria) {
        if (err) {
            callback(err);
        } else {
            callback(null, {
                value: x,
                criteria: criteria
            });
        }
    });
};
var argument5 = 1.1292220190494528e+308;
var argument6 = function (part) {
 callbackArguments.push(arguments) 

    if (part) {
        return part;
    }
};
var argument7 = r_0;
var argument8 = r_0;
var argument9 = function () {
 callbackArguments.push(arguments) 

    var iframe = $(this);
    return $('<div>').css({
        position: 'absolute',
        width: iframe.outerWidth(),
        height: iframe.outerHeight()
    }).appendTo(iframe.parent()).offset(iframe.offset())[0];
};
var base_0 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test146.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)