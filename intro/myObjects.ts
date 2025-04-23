const user = {
    name: "otac",
    email: "otac@ttv.com"
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: "otac", isPaid: false})

function createCourse():{name: string, price: number}{
    return {name: "typscript", price: 0.0}
}

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createNewUser(user: User):User {
    return {name: "otac", email: "otac@ttv", isActive: true} 
}

createNewUser({name: "otac", email: "otac@ttv", isActive: true})

//PEGAR OS EXEMPLOS ANOTADOS NO CADERNO ROSA

export {}