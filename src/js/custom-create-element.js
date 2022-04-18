export const createElement = (tagName, initObj) => {
    const element = document.createElement(tagName);

    if (!initObj) {
        return element;
    }

    const { attributes, childNodes, ...customProp } = initObj;

    if (customProp) {
        for (const prop in customProp) {
            element[prop] = customProp[prop];
        }
    }

    if (attributes) {
        attributes.forEach((attr) => element.setAttribute(attr.key, attr.value));
    }

    if (childNodes) {
        childNodes.forEach((node) => element.append(node));
    }

    return element;
}