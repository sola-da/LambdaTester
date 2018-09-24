





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    var axisPanel = axesPanels[id], sizes = sizesMaxByAxisId[id], ol = 'x' === axisPanel.axis.orientation ? 'height' : 'width';
    size = axisPanel[ol];
    size > sizes.axis && (sizes.axis = size);
    var titlePanel = axisPanel.titlePanel;
    if (titlePanel) {
        size = titlePanel[ol];
        size > sizes.title && (sizes.title = size);
    }
};
var argument2 = false;
var argument3 = 100;
var argument4 = function (dir) {
 callbackArguments.push(arguments) 

    var directory = dir + '/public';
    if (fileLoader.fileExists(directory)) {
        app.use(connect.static(directory, configuration.publicStaticOptions));
    }
};
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    t.fn[e] = function (t) {
        return this.on(e, t);
    };
};
var argument6 = [714,126,893,157,607,618,595,595];
var argument7 = r_0;
var argument8 = function (m) {
 callbackArguments.push(arguments) 

    var ch1 = m.charAt(0);
    var ch2 = m.charAt(m.length - 1);
    if (ch1 === ch2 && (ch1 === '"' || ch1 === '\'')) {
        m = m.substr(1, m.length - 2).replace('\\"', '"');
    }
    membersOnly[m] = false;
};
var base_0 = [242,"Z"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"Z"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"Z"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"Z"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test637.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)