function addTwo(num: number): number {
    return num + 2

    //return "hellow malacia =D"
}

function toUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, pass: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, 
    isPaid: boolean = false) => {}

let myValue = addTwo(5)
toUpper("4")
signUpUser("otac", "otac@twitch.com", "ttv", false)
loginUser("o", "o@o.com") 

function getValue(myVal: number): string {
    if(myVal > 5)
        return "200 OK"
    return "201 DONE"
        //return true;
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((hero) : string => {
    return  `hero is ${hero}`
})

function handleError(myError: string):never{
    throw Error(myError)
}

function getError(myError: string):void{
    console.log(myError)
}

export {}