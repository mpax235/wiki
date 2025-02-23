async function loadMarkdown(file) {
    const response = await fetch(file);
    const text = await response.text();
    const content = document.getElementById('content');
    content.innerHTML = marked.parse(text);
}

loadMarkdown('../assets/markdown/The_mpax235_Website.md');