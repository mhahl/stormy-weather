import {ListUsersAPIResponse} from "~/lib/headscale/properties";

/**
 * The headers to send to the headscale server.
 */
const HEADERS = {
    'Authorization': `Bearer ${import.meta.env.VITE_HEADSCALE_APIKEY}`,
};


/**
 * The url of the headscale server.
 */
const HEADSCALE_URL = import.meta.env.VITE_HEADSCALE_URL;

/**
 * List all users from the headscale server.
 * @returns {Promise<Array<UserProperties>>} A list of users.
 */
const listUsers = async () => {
    const users = await fetch(`${HEADSCALE_URL}/api/v1/user`, {
        method: 'GET',
        headers: HEADERS
    });
    const data: ListUsersAPIResponse = await users.json();
    return data.users;
}

export {
    listUsers,
}