export const title = "Vite Boilerplate";

const { env } = import.meta;

export const version: string = env.VITE_VERSION || "unset_version";
export const sha: string = env.GIT_SHA || "unset_sha";
export const basename = env.BASE_URL;

const ghUrl = "https://github.com/nexys-system/boilerplate_vite";

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  version: `${ghUrl}/release/tag/${version}`,
  url: ghUrl,
};
