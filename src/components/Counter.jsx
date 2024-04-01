function Counter() {
    let count = 0
    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    count++
                }}
            >+</button>
            <button
                onClick={() => {
                    count--
                }}
            >-</button>
            <button
                onClick={() => {
                    console.log(count)
                }}
            >console</button>


        </div>
    )

}

export default Counter