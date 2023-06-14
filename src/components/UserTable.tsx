import {createResource} from "solid-js";

import {listUsers, UserProperties} from '~/lib/headscale';

import {A} from "solid-start";
import UserTableRow from "~/components/UserTableRow";

function UserTable() {


    const [users] = createResource(listUsers);

    return (
        <div>

            <table class="ui table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <For each={users()}>{(user: UserProperties, _: Number) =>
                        <UserTableRow user={user} />
                    }</For>
                </tbody>
                <tfoot class="full-width">
                    <tr>
                        <th></th>
                        <th></th>
                        <th colspan="2">
                            <A href="/dashboard/users/new" class="ui right floated small primary labeled icon button">
                                <i class="plus icon"></i> New
                            </A>
                        </th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
}

export default UserTable;