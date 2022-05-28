export const getFlatArray = (value: [] | any) => {
    const flatArray = []

    if (!Array.isArray(value)) {
        flatArray.push(value)
    }
    else {
        value.forEach( item => flatArray.push(...getFlatArray(item)))
    }

    return flatArray
}
