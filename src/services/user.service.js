const user = {
    name: "Puki Ben David",
    balance: 100,
    transactions: []
}

function getUser() {
    return new Promise((resolve) => {
        resolve(user)
    })
}


export const userService = {
    getUser,
}