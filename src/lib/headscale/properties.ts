/**
 * The properties of a user.
 * @interface UserProperties
 * @property {string} id The id of the user.
 * @property {string} name The name of the user.
 * @property {Date} createdAt The date the user was created.
 */
interface UserProperties {
    id: string,
    name: string,
    createdAt: String,

}

/**
 * The response from the headscale server when listing users.
 * @interface ListUsersAPIResponse
 * @property {Array<UserProperties>} users A list of users.
 */
interface ListUsersAPIResponse {
    users: Array<UserProperties>
}

interface PreAuthKeyProperties {
    user: string,
    id: string,
    key: string,
    reusable: boolean,
    ephemeral: boolean,
    used: boolean,
    expiration: Date,
    createdAt: Date,
    aclTags: Array<string>
}

interface ListMachinesAPIResponse {
    machines: Array<MachineProperties>
}

interface MachineProperties {
    id: string,
    machineKey: string,
    nodeKey: string,
    discoKey: string,
    ipAddresses: Array<string>,
    name: string,
    user: UserProperties,
    lastSeen: Date,
    lastSuccessfulUpdate: Date,
    expiry: Date,
    preAuthKey: PreAuthKeyProperties,
    createdAt: Date,
    aclTags: Array<string>,
    registerMethod: string,
    forcedTags: Array<string>,
    invalidTags: Array<string>,
    validTags: Array<string>,
    givenName: string,
    online: boolean
}
export {
    UserProperties,
    ListUsersAPIResponse,

    MachineProperties,
    ListMachinesAPIResponse,
    PreAuthKeyProperties
}
