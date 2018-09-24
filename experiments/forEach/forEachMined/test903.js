





var callbackArguments = [];
var argument1 = function (labelBBox, index) {
 callbackArguments.push(arguments) 

    evalLabelSideOverflow(labelBBox, begSide, !0, index);
    evalLabelSideOverflow(labelBBox, endSide, !1, index);
};
var argument2 = {"823":"X-","":"","`":"","7.955415878634281e+306":403};
var argument3 = ["HM","7N",126,"!`rIn9KP",0,"Z","z*:","wc",893,"e"];
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    var regex = new RegExp('%%' + v + '%%', 'g');
    data = data.replace(regex, binary.argv[v]);
};
var argument5 = r_0;
var argument6 = function (dimGroupName) {
 callbackArguments.push(arguments) 

    var L = itemLogicalGroup[dimGroupName];
    L > 0 && add(dimGroupName, 0, L);
};
var argument7 = function (command) {
 callbackArguments.push(arguments) 

    self.commands[command] = function (argv, callback) {
        log.verbose('command', command, argv);
        return require('./' + command)(self, argv, callback);
    };
};
var argument8 = ["+","Y",",","x",843,"!","(",893];
var base_0 = [25,893,843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,843]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test903.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)