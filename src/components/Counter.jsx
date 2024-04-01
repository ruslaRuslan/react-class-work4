import { useState } from "react"

// function Counter() {
//     let count = 0
//     // men sene funksiya verirem. Hemin funksiya ile deyis ki, mende render edim!
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button
//                 onClick={() => {
//                     count++
//                 }}
//             >+</button>
//             <button
//                 onClick={() => {
//                     count--
//                 }}
//             >-</button>
//             <button
//                 onClick={() => {
//                     console.log(count)
//                 }}
//             >console</button>


//         </div>
//     )

// }

// ------------------------------------------------------------------------------------------------------------------------


function Counter() {
    const [count, setCount] = useState(0) // use*->Hook (use-ile baslayan hook-lar adlanir)
    //name-ingin adlandirilmasi [count ve setCount] olur

    // men sene funksiya verirem. Hemin funksiya ile deyis ki, mende render edim!
    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >+</button>
            <button
                onClick={() => {
                    setCount(count - 1)
                }}
            >-</button>
            <button
                onClick={() => {
                    setCount(0)
                }}
            >0</button>
            <button
                onClick={() => {
                    console.log(count)
                }}
            >console</button>


        </div>
    )

}

export default Counter