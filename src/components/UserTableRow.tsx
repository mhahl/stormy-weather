import {A} from "solid-start";

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

function UserTableRow(props: any) {
    return (
        <>
            <tr>
                <td>
                    <A  href={props.user.id}>
                        {props.user.name}
                    </A>
                </td>
                <td>{props.user.createdAt}</td>
                <td class="collapsing right aligned">
                    <A href="/delete" class="ui mini red icon button">
                        <i class="trash icon"></i>
                    </A>
                </td>
            </tr>
        </>
    )
}

export default UserTableRow;