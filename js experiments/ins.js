const event = new CustomEvent("guiclosed", { detail: { reason: "user action" } })

document.dispatchEvent(event);

document.addEventListener("guiClosed", e => {
    console.log("e.detail.reason");
})
function removenegatives() {
    const pos = x / 2;
    if (!pos) {
        return null;
    }
    const array = [1, 2, 3];
    return array.map(num => num >= 0);
}