function editElement(element, match, replacer) {
    let content = element.textContent;
    content = content.replaceAll(match, replacer);
    element.textContent = content;
}