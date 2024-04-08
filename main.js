const innerText = document.querySelector('#latin-text');
const outerText = document.querySelector('.latin-result>pre>code');
const copyButton = document.querySelector('button');


copyButton.onclick = function () {
    navigator.clipboard.writeText(outerText.innerText);
    copyButton.innerText = 'COPIED!';
    setTimeout(function () {
        copyButton.innerText = 'COPY';
    }, 3000)
}

innerText.oninput = function () {
    let text = innerText.value.trim();
    if (text !== '') {
        let result;
        const regExp = /[^\w\s'",\\.:;?!@#$%^&*+-=_{}()<>\[\ ]/gi;
        result = text.replace(/\>/g, str => '&#x3E;');
        result = result.replace(/\</g, str => '&#x3C;');
        result = result.replace(regExp, symbol => `<mark>${symbol}</mark>`);
        outerText.innerHTML = result;
    }
}


