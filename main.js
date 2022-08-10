const reducer = (state=[], action) => {
    console.log("reducer", state, action)
    if (action.type === "ADD_USER"){
        return [...state, action.payload]
    }
    return state
};

const store = Redux.createStore(reducer);

// store.subscribe(() => {
//     console.log('module 1 subscribe', store.getState())
// });

// store.dispatch({ type: "ADD_USER", payload: "jack" });
// store.dispatch({ type: "ADD_USER", payload: "john" });

const list = document.querySelector(".list")
const addUser = document.querySelector(".addUser")
const userInput = document.querySelector(".userInput")

store.subscribe(() => {
    list.innerHTML = ""
    userInput.value = ""
    store.getState().forEach(user => {
        const li = document.createElement("li")
        li.textContent = user
        list.appendChild(li)
    })
});

addUser.addEventListener("click", () => {
    store.dispatch({ type: "ADD_USER", payload: userInput.value });
})