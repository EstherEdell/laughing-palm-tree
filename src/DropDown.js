import { useState } from "react";

const DropDown = (props) => {
    const [userChoice, setUserChoice] = useState('placehodler')
    const handleUserChoice = (e) => {
        setUserChoice(e.target.value)
    }
    console.log(userChoice);
    return(
        <form onSubmit={(e) => props.chooseArt(e, userChoice)}>
            <select value={userChoice} onChange={handleUserChoice}>
                <option value="placeholder" disabled>Pick one:</option>
                <option value="horse">Horse</option>
                <option value="cat">Cat</option>
                <option value="flowers">Flowers</option>
            </select>
            <button type="submit">Give me art!</button>
        </form>
    )
}

export default DropDown;