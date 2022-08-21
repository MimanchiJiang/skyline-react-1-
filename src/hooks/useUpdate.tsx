import { useEffect, useRef } from "react"
const useUpdate = (fn: () => void, deps: any[]) => {
    const count = useRef(0)

    useEffect(() => {
        count.current += 1
    })
    useEffect(() => {
        if (count.current > 1) {
            fn()
        }
    }, deps
    )//tags 更改时渲染

}

export default useUpdate

