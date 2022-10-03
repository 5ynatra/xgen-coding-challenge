
let xGenElement1 = document.getElementById("XgenElement1")

let xGenElement2 = document.getElementById("XgenElement2")

var attributesForTemplate1 = getAttributes(htmlTemplate1)

var attributesForTemplate2 = getAttributes(htmlTemplate2)

var limit = 4;

for (var product of products) {
    let formattedTemplate1 = htmlTemplate1
    let formattedTemplate2 = htmlTemplate2
    if (product.is_in_stock != 0 && product.product_types.includes("top")) {
        if (limit == 0)
            break;
        for (var attr of attributesForTemplate1) {
            formattedTemplate1 = formattedTemplate1.replace(`{{${attr}}}`, product[attr])
        }

        for (var attr of attributesForTemplate2) {
            formattedTemplate2 = formattedTemplate2.replace(`{{${attr}}}`, product[attr])
        }
        xGenElement1.innerHTML += formattedTemplate1
        xGenElement2.innerHTML += formattedTemplate2
        console.log(xGenElement1, xGenElement2)
        limit--;
    }
}



function getAttributes(template) {
    let result = [];

    let noResult = false;

    let tag1 = '{{', tag2 = '}}'

    while (!noResult) {
        let parsed = template.substring(
            template.indexOf(tag1) + 2,
            template.indexOf(tag2))

        if (parsed != '') {
            result.push(parsed)
        } else {
            noResult = true;
        }

        template = template.substring(template.indexOf(tag2) + 2)
    }

    return result;
}
