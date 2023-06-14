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

export {
    UserProperties,
    ListUsersAPIResponse
}
