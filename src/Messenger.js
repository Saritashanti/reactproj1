import Message from "./Message"

let Messenger = () => {
    return(
        <div>
            <h1>Message</h1>
            < Message msg="Message 1"/><br/>
            < Message msg="Hello"/><br/>
            < Message msg="How are you"/><br/>
            < Message msg="Im good"/><br/>
        </div>
    )
}
export default Messenger;