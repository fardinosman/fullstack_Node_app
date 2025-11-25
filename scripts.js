import sanitizeHtml from "sanitize-html";

console.log(sanitizeHtml('h1:<h1> iam  in </h1>'))
console.log(sanitizeHtml('<script>alert("Hacked!")</script><p>This is a paragraph.</p>'));
console.log(sanitizeHtml('<img src=x onerror=alert("Hacked!") /><b>Bold Text</b>'));
console.log(sanitizeHtml('<a href="javascript:alert(\'Hacked!\')">Click me</a><i>Italic Text</i>'));
console.log(sanitizeHtml('<div onclick="alert(\'Hacked!\')">Click here</div><u>Underlined Text</u>'));
console.log(sanitizeHtml('<iframe src="http://malicious.com"></iframe><span>Some text</span>'));
console.log(sanitizeHtml('<video src="video.mp4" onplay="alert(\'Hacked!\')"></video><strong>Strong Text</strong>'));
console.log(sanitizeHtml('<audio src="audio.mp3" onpause="alert(\'Hacked!\')"></audio><em>Emphasized Text</em>'));  
console.log(sanitizeHtml('<form action="http://malicious.com/submit" method="POST"></form><mark>Highlighted Text</mark>'));
console.log(sanitizeHtml('<table onclick="alert(\'Hacked!\')"><tr><td>Data</td></tr></table><small>Small Text</small>'));   