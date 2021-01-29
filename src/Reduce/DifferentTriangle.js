export const difference = (a, b, c) => {
    if(a === b) {
        return {a: 1.5 * Number(a), b: Number(b), c: Number(c), d: Number(b)}
    }else if(a === c){
        if(a === b){
            return {a: 3 * Number(a), b: Number(b), c: Number(c), d: Number(b)}
        }else{
            return {a: 1.5 * Number(a), b: Number(b), c: Number(c), d: Number(b)}
        }
    }else if(b === c){
        if(a === b){
            return {a: 1.5 * Number(a), b: Number(b), c: Number(c), d: Number(b)}
        }else{
            return {a: 3 * Number(a), b: Number(b), c: Number(c), d: Number(b)}
        }
    }else{
        return {a: Number(a), b: Number(b), c: Number(c), d: Number(b)}

    }
}