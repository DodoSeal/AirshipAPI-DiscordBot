import { AirshipUser, AirshipError } from "../types/AirshipTypes.js";

export namespace Users {
    const FetchByUsername_URL = "https://api.airship.gg/game-coordinator/users/user?username={username}";
    const FetchByUserId_URL = "https://api.airship.gg/game-coordinator/users/uid/{userId}";

    // TODO: Needs auth, maybe make a bot user?
    const FetchUsernameAvailability_URL = "https://api.airship.gg/game-coordinator/users/availability?username={username}";

    /**
     * Queries the Airship User API for a Username
     * @param username The username to query
     * @returns An AirshipUser, AirshipError, or empty object (meaning no user found)
     */
    export async function FetchByUsername(username: string): Promise<AirshipUser | AirshipError | {}> {
        const request = await fetch(FetchByUsername_URL.replace(`{username}`, username));
        const resText = await request.text();
        const result = JSON.parse(resText);

        if ("error" in result) {
            return result as AirshipError;
        } else if (Object.keys(result).length === 0) {
            return {};
        };

        return result as AirshipUser;
    };

    /**
     * Queries the Airship User API for a UserId
     * @param userId The userId to query
     * @returns An AirshipUser, AirshipError, or empty object (meaning no user found)
     */
    export async function FetchByUserId(userId: string) {
        const request = await fetch(FetchByUserId_URL.replace(`{userId}`, userId));
        const resText = await request.text();
        const result = JSON.parse(resText);

        if ("error" in result) {
            return result as AirshipError;
        } else if (Object.keys(result).length === 0) {
            return {};
        };

        return result as AirshipUser;
    };
};