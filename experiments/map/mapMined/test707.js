





var callbackArguments = [];
var argument1 = function (chunk) {
 callbackArguments.push(arguments) 

    var stub = new Stub(function (err, out) {
            if (err) {
                chunk.setError(err);
            } else {
                callback(out, chunk);
            }
        });
    body(stub.head, context).end();
};
var argument2 = false;
var argument3 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
        return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
        };
    }) : {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function (foldLine) {
 callbackArguments.push(arguments) 

    var folds = foldLine.folds.map(function (fold) {
            return fold.clone();
        });
    return new FoldLine(fd, folds);
};
var argument7 = function (cookie) {
 callbackArguments.push(arguments) 

    return cookie.replace(_this.cookieNamePrefix, '');
};
var base_0 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test707.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)