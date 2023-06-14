import {UserProperties} from "~/lib/headscale";
import UserTableRow from "~/components/UserTableRow";

function ListSegment(props: ListSegmentProps) {
    return (
        <div class="ui segments">
            <div class="ui segment">
                <h4>{props.title}</h4>
            </div>
            <div class="ui segment">
                <div class="ui list">
                    <For each={props.items}>{(item: any, _: any) =>
                        <div class="item">
                            <a href={item.href}>{item.title}</a>
                        </div>
                    }</For>
                </div>
            </div>
        </div>
    )
}

interface ListSegmentProps {
    title: string,
    items: any,
}

export default ListSegment;