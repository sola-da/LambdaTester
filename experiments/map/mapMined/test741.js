





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.id;
};
var argument2 = true;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    tmp_args.push(key);
    tmp_args.push(args[1][key]);
};
var argument4 = {"25":627,"403":"W","":1.7747212300058212e+308,"5e-324":8.357574063372312e+307,"7.694512449000809e+307":893,"4.984570708601305e+307":893,"5.502295109608997e+307":"mfE","1.0443959161467238e+308":"","6.898650054992507e+307":"","_pSU":3.6226386676019403e+307};
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    return [
        '(typeof i',
        i,
        '!==\'number\'||i',
        i,
        '<0)?this._shape',
        i,
        ':i',
        i,
        '|0'
    ].join('');
};
var argument6 = true;
var argument7 = function (loc) {
 callbackArguments.push(arguments) 

    var coord = loc.coord || (loc.coord = map.locationCoordinate(loc)), point = map.coordinatePoint(coord);
    if ('radius' in loc)
        point.radius = loc.radius;
    return point;
};
var argument8 = r_2;
var argument9 = true;
var base_0 = ["]<2F",126,843,"d","p",618,"q","r`"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]<2F",126,843,"d","p",618,"q","r`"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test741.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)