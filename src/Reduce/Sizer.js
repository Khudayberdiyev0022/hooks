export const sizer = (value) => {
    if (value < 10) {
        return value
    } else if (value >= 10 && value < 100) {
        return value / 10
    } else if (value >= 100 && value < 1000) {
        return value / 100
    } else {
        return value
    }
}