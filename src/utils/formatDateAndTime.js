export default function formatDateAndTime(strDate) {
    const date = new Date(strDate)
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
