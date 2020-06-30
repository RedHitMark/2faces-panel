//@SEE: https://developer.android.com/reference/android/Manifest.permission.html
let a = [];
let a_p = document.querySelectorAll('div[data-version-added]');
a_p.forEach((divEl, index) => {
    if(index >= 1) {
        const minAPI = divEl.getAttribute('data-version-added');
        const name = 'android.permission.' + divEl.children[0].getAttribute('data-text');

        let allParagraphs = divEl.querySelectorAll('p');

        let description = "";
        let risk = "";

        allParagraphs.forEach((paragraph) => {
            if(paragraph.innerText.startsWith("Protection level: ")) {
                risk = paragraph.innerText.substr(paragraph.innerText.indexOf("Protection level: ")+ 18);
            } else if(paragraph.innerText.startsWith("Not for use by third-party applications")) {
                risk = "Not for use by third-party application";
            } else if (!paragraph.innerText.startsWith("Constant Value:") ) {
                description += paragraph.innerText;
            }
        });
        a.push({name: name, minAPI: minAPI, risk: risk, description: description});
    }
});
JSON.stringify(a);
const unique = [...new Set(a.map(item => item.risk))];
console.log(unique)
