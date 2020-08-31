import { atom } from "recoil"

export const boxesAtom = atom({
    key: `boxes`,
    default: []
})

export const boxAtom = (id) => atom({
    key: `box${id}`,
    default: {color: "white"}
})