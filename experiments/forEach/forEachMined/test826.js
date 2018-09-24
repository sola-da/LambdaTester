





var callbackArguments = [];
var argument1 = function (mediaield) {
 callbackArguments.push(arguments) 

    if (Ext.isEmpty(mediaield.get('mediaTypeId'))) {
        mediaError = true;
    }
};
var argument2 = function (file) {
 callbackArguments.push(arguments) 

    if (!pushFile(file, p))
        return;
    if (options.recursive) {
        var oldDir = _pwd();
        _cd('', p);
        if (fs.statSync(file).isDirectory())
            list = list.concat(_ls('-R' + (options.all ? 'A' : ''), file + '/*'));
        _cd('', oldDir);
    }
};
var argument3 = false;
var argument4 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(letter)).toBe(false);
    expect(XRegExp('\\P{Letter}').test(letter)).toBe(false);
    expect(XRegExp('\\PL').test(letter)).toBe(false);
    expect(XRegExp('\\p{^L}').test(letter)).toBe(false);
    expect(XRegExp('\\p{^Letter}').test(letter)).toBe(false);
};
var argument5 = false;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    var val = fetchValue(vars, v, sort);
    if (val) {
        if (typeof val == 'number') {
            d[sort] += val;
        } else {
            d[sort] = val;
        }
    }
};
var argument7 = r_2;
var base_0 = [126,618,823,100,893,126,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,618,823,100,893,126,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,618,823,100,893,126,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,618,823,100,893,126,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test826.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)