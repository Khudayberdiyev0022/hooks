export const distance = (value) => {
    if (value < 10) {
        return { name: "sm", value: 5 }
    } else if (value >= 10 && value < 100) {
        return { name: "dm", value: 6 }
    } else if (value >= 100 && value < 1000) {
        return { name: "m", value: 7 }
    } else {
        return { name: "", value: 0 }
    }
}