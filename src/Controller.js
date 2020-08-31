import React from "react"
import { boxAtom } from "./Atom"
import { useRecoilState } from "recoil"

export default function Controller(props){

    const [box, setBox] = useRecoilState(boxAtom(props.id))

    function handleSelect(e){
        setBox({...box, color: e.target.value})
    }

    return (
        <div>
            Box {props.id}
            <select onChange = {handleSelect}>
                <option value="white">White</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
            </select>
        </div>
    )
}