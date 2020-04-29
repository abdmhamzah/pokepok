import { useState } from 'react'

export default (initialValue) => {
    const [data, setData] = useState(initialValue)

    return {
        data,
        onChange: (e) => {
            setData(e.target.value)
        },
        onReset: (e) => {
            setData('')
        }
    }
}