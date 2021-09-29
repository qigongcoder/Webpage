"use strict";

var example=`# Heading One
## Heading Two
**Strong** emphasis`;

function first_bit() {

    document.getElementById('editor').innerHTML = example;
    document.getElementById('preview').innerHTML = marked(example);

}


function check() {

    var text = document.getElementById("editor").value;
    document.getElementById('preview').innerHTML = marked(text);

}


