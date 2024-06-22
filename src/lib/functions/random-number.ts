
export default function Random_Number(): number{

    let digit :  number = Math.floor(Math.random() * 90) + 10;

    return digit
}

export function Big_Numbers(): number{

    let digit :  number = Math.floor(Math.random() * 90000) + 10;

    return digit
}