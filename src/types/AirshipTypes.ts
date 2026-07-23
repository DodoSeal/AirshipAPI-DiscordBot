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

export type Platform = "Mac" | "Windows" | "iOS" | "Android";
export type Visibility = "PUBLIC" | "UNLISTED" | "PRIVATE";

// WIP Types
export type PublishType = "FULL_PUBLUSH";
export type GameFleet = "standard";

// Airship User Types
export interface AirshipUser {

};

// Airship Game Types
export interface AirshipGame {

};

export interface AirshipGameVersionSettings {
    gameId: string,
    defaultMaxPlayers: number,
    defaultFleet: GameFleet
};

export interface AirshipGameVersion {

};

// Airship Package Types
export interface AirshipPackage {

};

export interface AirshipPackageVersion {

};

// Airship Organization Types
export interface AirshipPublicOrganization {

};

export interface AirshipOrganizationGame {

};