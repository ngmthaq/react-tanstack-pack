/**
 * @file StorageKeys
 * @description This file defines the keys used for local storage in the application.
 * Ensure that these keys are unique and descriptive to avoid conflicts.
 * Use prefixes like "@app:" to namespace your keys.
 * This helps in avoiding collisions with other libraries or parts of the application.
 */

export enum StorageKeys {
  LANGUAGE = "@app:language",
  ACCESS_TOKEN = "@app:accessToken",
  REFRESH_TOKEN = "@app:refreshToken",
}
