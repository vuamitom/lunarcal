let builder = require('./js/amlich-hnd.js');
let body = (builder.printFrame());
const fs = require('fs');

fs.readFile('./index.tmpl', {encoding: 'utf-8'}, (er, data) => {
    let templ = data;
    templ = templ.replace('__BODY__', body);
    fs.readFile('./style.css', {encoding: 'utf-8'}, (er, css) => {
        templ = templ.replace('__STYLE__', css);
        fs.readFile('./js/amlich-hnd.js', {encoding: 'utf-8'}, (er,ss) => {
            // TODO: remove frame
            ss = ss.replace('exports.printFrame = printFrame;', '');
            let st = ss.indexOf('/*__BUILD__*/');
            let ed = ss.indexOf('/*__END__BUILD__*/');
            ss = ss.substring(0, st) + ss.substring(ed);
            templ = templ.replace('__SCRIPT__', ss);
            fs.writeFile('./index.html',templ, (err) => {
                 console.error(err);
            });
        })
    })
})