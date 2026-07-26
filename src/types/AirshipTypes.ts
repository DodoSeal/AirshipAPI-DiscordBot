// MISC Types
export interface SocialMediaLink {
    type: "DISCORD",
    url: string
};

export interface AirshipPlatform {
    playerVersionId: string,
    playerVersion: string,
    active: boolean,
    creationTime: string  
};

export interface AirshipError {
    message: string[],
    error: string,
    statusCode: number
};

export type Platform = "Mac" | "Windows" | "iOS" | "Android";
export type Visibility = "PUBLIC" | "UNLISTED" | "PRIVATE";

// TODO: WIP Types
export type PublishType = "FULL_PUBLUSH";
export type GameFleet = "standard";

// Airship User Types
export interface AirshipUser {
    user: {
        uid: string,
        username: string,
        usernameLower: string,
        statusText?: string,
        profileImageId?: string,
        lastOnlineTime?: string
    }
};

export interface AccountInfo {
    refreshToken: string,
    time: number
};

export interface AccessTokenResult {
    access_token: string,
    expires_in: string,
    token_type: string,
    refresh_token: string,
    id_token: string,
    user_id: string,
    project_id: string
};

export interface AccessTokenError {
    error: {
        code: number,
        message: string,
        status: string
    }
};

// Airship Game Types
export interface AirshipGame {
    game: {
        id: string,
        slug: string | null,
        slugProperCase: string | null,
        name: string,
        description: string | null,
        iconImageId: string,
        organizationId: string,
        createdAt: string,
        visibility: "PUBLIC" | "UNLISTED" | "PRIVATE",
        lastVersionUpdate: string,
        archivedAt: string | null,
        loadingScreenImageId: string | null,
        logoImageId: string | null,
        videoId: string | null,
        links: SocialMediaLink[],
        plays: number,
        favorites: number,
        plays24h: number,
        uniquePlays24h: number,
        platforms: Platform[],
        organization: AirshipOrganization
    }
};

export interface AirshipGameVersionSettings {
    gameId: string,
    defaultMaxPlayers: number,
    defaultFleet: GameFleet
};

export interface AirshipGameVersion {
    version: {
        game: {
            gameVersionId: string,
            gameId: string,
            assetVersionNumber: number,
            codeVersionNumber: number,
            minPlayerVersion: number,
            defaultScene: string,
            active: boolean,
            uploadComplete: boolean,
            creationTime: string,
            packageSlugs: string[],
            platforms: string[],
            deploymentinterface: string,
            publishNumber: number,
            assetFileMetadata: {
                [gamePlatform in Platform]?: {
                    files: {
                        [fileName: string]: {
                            size: number
                        }
                    },
                    size: number
                }
            }
        },
        platform: any, // TODO: WIP
        settings: any  // TODO: WIP
    }
};

// Airship Package Types
export interface AirshipPackage {
    pkg: {
        id: string,
        slug: string,
        slugProperCase: string,
        name: string,
        description: string,
        iconImageId: string,
        organizationId: string,
        createdAt: string,
        lastVersionUpdate: string,
        archivedAt: string | null,
        platforms: Platform[],
        plays: number,
        plays24h: number,
        uniquePlays24h: number,
        organization: AirshipOrganization
    }
};

export interface AirshipPackageVersion {
    version: {
        package: {
            packageVersionId: string,
            packageSlug: string,
            assetVersionNumber: number,
            codeVersionNumber: number,
            active: boolean,
            uploadComplete: boolean,
            creationTime: string,
            publishNumber: number,
            platforms: Platform[],
            deploymentType: string,
            assetFileMetadata: {
                [packagePlatform in Platform]?: {
                    files: {
                        [fileName: string]: {
                            size: number
                        }
                    },
                    size: number
                }
            }
        };
        platform: {
            playerVersionId: string,
            playerVersion: string,
            active: true,
            creationTime: string
        }
      };
};

// Airship Organization Types
interface AirshipOrganization {
    id: string,
    slug: string,
    slugProperCase: string,
    name: string,
    description: string | null,
    iconImageId: string,
    createdAt: string,
    adminBanned: boolean
}

export interface AirshipPublicOrganization {
    organization: {
        name: string,
        id: string,
        slug: string | null,
        slugProperCase: string | null,
        description: string,
        iconImageId: string,
        createdAt: string,
        games: AirshipOrganizationGame[]
    }
};

export interface AirshipNullOrganization {
    organization: null
};

export interface AirshipOrganizationGame {
    id: string,
    slug: string | null,
    slugProperCase: string | null,
    name: string,
    description: string,
    iconImageId: string,
    organizationId: string,
    createdAt: string,
    visibility: Visibility,
    lastVersionUpdate: string,
    archivedAt: string | null,
    loadingScreenImageId: string | null,
    logoImageId: string | null,
    videoId: string | null,
    links: SocialMediaLink[],
    plays: number,
    favorites: number,
    plays24h: number,
    uniquePlays24h: number,
    platforms: Platform[]
};