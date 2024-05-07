import useTime from "./useTime"


export default function Clock(){
    const time = useTime()
    const formatedTime = time.toLocaleTimeString()

    return (
        <div className="clock">
            <h1>{formatedTime}</h1>
        </div>
    )
}