export const convertNameToPath =(name)=> {
    const path = name.toLowerCase().split(" ").join("-")
    return path
}