const chartCreating = (data, type = 'cases') => {
    const dataWillPushedToState = []
    const objectKeys = Object.keys(data[type])
    objectKeys.forEach(ele => {
        if (objectKeys.indexOf(ele) !== 0) {
            let thePreviousElementIndex = (objectKeys.indexOf(ele)) - 1
            let thePreviousElement = objectKeys[thePreviousElementIndex]
            dataWillPushedToState.push({
                x: ele,
                y: data[type][ele] - data[type][thePreviousElement]
            })
        }

    })

    return dataWillPushedToState
}

export default chartCreating;

