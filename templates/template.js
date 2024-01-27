const templates = [];

for (const template of document.getElementsByTagName('template')) {
    templates.push(template)
    await fetch(template.getAttribute('src'))
        .then(file => file.text())
        .then(content => {
            const html = document.createElement('html');
            html.innerHTML = content;
            // document.head.lastChild?.insertAdjacentHTML('afterend', html.getElementsByTagName('head')[0].innerHTML);
            template.insertAdjacentHTML('afterend', html.getElementsByTagName('body')[0].innerHTML);
    });
}

templates.forEach(template => template.remove());