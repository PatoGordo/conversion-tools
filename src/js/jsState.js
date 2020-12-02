function useState(stateClass, state) {
    let jsStates = {}

    for (const element of document.getElementsByClassName(stateClass)) {
        jsStates[element] = element.innerText
        setTimeout( () => {
            setState(state)
        }, 0)
    }

    function getState() {
        return state
    }
    
    function setState(newState) {
        state = newState
        for (const element of document.getElementsByClassName(stateClass)) {
            element.innerText = eval(jsStates[element])
        }
    }

    return [
        getState,
        setState
    ]
}
