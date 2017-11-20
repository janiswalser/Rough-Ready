
var title = 'prototype';
var folder = 'test';




// -----------------------

var fs = require('fs');
var path = require('path');

var text = '';
text += '<!DOCTYPE html>\n'
text += '<html>\n'
text += '  <head>\n'
text += '    <meta charset="UTF-8">\n'
text += '    <title>' + title + '</title>\n'
text += '    <script src="main.js"></script>\n'
text += '  </head>\n'
text += '  <body>\n'
text += '\n'
text += '  </body>\n'
text += '</html>'

fs.mkdirSync(path.join('.', folder));
fs.writeFileSync(path.join('.', folder, 'index.html'), text);
fs.writeFileSync(path.join('.', folder, 'main.js'), '');
