import React from "react"
import { boxAtom } from "./Atom"
import { useRecoilValue } from "recoil"

export default function Box(props){
    const box = useRecoilValue(boxAtom(props.id))
    return(
        <div className="box" style={{backgroundColor: box.color}}>
            {props.id}
        </div>
    )
}