import {A} from "solid-start";


function UserTableRow(props: any) {
    return (
        <>
            <tr>
                <td>
                    <A  href={"test"}>
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