
var title = 'prototype';
var folder = 'test';
var subfolder_01 = 'css';
var subfolder_02 = 'js';


// -----------------------

var fs = require('fs');
var path = require('path');

var text = '';
text += '<!DOCTYPE html>\n'
text += '<html>\n'
text += '  <head>\n'
text += '    <meta charset="UTF-8">\n'
text += '    <title>' + title + '</title>\n'
text += '    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n'
text += '    <script src="js/main.js"></script>\n'
text += '    <link rel="stylesheet" href="css/styles.css">\n'
text += '  </head>\n'
text += '  <body>\n'
text += '\n'
text += '  </body>\n'
text += '</html>'


fs.mkdirSync(path.join('.', folder));
fs.mkdirSync(path.join('./' + folder, subfolder_01));
fs.mkdirSync(path.join('./' + folder, subfolder_02));

fs.writeFileSync(path.join('.', folder, 'index.html'), text);
fs.writeFileSync(path.join('.', folder + '/' + subfolder_01, 'styles.css'), '');
fs.writeFileSync(path.join('.', folder + '/' + subfolder_02, 'main.js'), '');
