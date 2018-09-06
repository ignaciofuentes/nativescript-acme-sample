export class ColorUtility {
    static getStatusColor(status) {
        if (status == "New") {
            return "#00880A"; // green
        } else if (status == "Working") {
            return "#DDAA00"; // yellow
        } else {
            return "#D63100"; // red
        }
    }
}
