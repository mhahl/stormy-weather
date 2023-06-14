
import './Pusher.css';

function Pusher(props: PusherProps){
    return(
        <div>
            <div class="pusher container">
                <div class="ui fluid container">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

interface PusherProps {
    children: any;
}

export default Pusher;