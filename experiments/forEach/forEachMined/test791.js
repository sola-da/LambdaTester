





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    if (t.values.length > max) {
        maxTarget = t;
        max = t.values.length;
    }
};
var argument2 = function (event) {
 callbackArguments.push(arguments) 

    SVG.Element.prototype[event] = function (f) {
        var self = this;
        this.node['on' + event] = typeof f == 'function' ? function () {
            return f.apply(self, arguments);
        } : null;
        return this;
    };
};
var argument3 = false;
var argument4 = {"['<":"","1.5002563262662195e+308":705,"":"A","7.555922204484267e+307":100,"1.3691234894117159e+308":";L","9.905049037681848e+307":8.302802967033115e+307,"G,":2.2651219993924675e+307,"7.231168222148124e+307":5.066734595759295e+307};
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    if (typeof t === 'string') {
        if (t[0] === '\n') {
            column = t.length - 1;
            row++;
        } else
            column += t.length;
        text += t;
    } else {
        if (!t.start)
            t.start = {
                row: row,
                column: column
            };
        else
            t.end = {
                row: row,
                column: column
            };
    }
};
var argument6 = r_2;
var argument7 = r_0;
var argument8 = function (file) {
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
var base_0 = ["L","#sg","Ft4V","1=$","T<eD","a","QG","gbB_","?","-ES"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L","#sg","Ft4V","1=$","T<eD","a","QG","gbB_","?","-ES"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L","#sg","Ft4V","1=$","T<eD","a","QG","gbB_","?","-ES"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L","#sg","Ft4V","1=$","T<eD","a","QG","gbB_","?","-ES"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test791.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)