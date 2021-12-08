import Singleton from "./Singleton"

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log("A is euqal to B", a === b)