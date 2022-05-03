export const version = import.meta.env.VERSION || "unset_version";
export const sha = import.meta.env.GIT_SHA || "unset_sha";
export const basename = import.meta.env.PUBLIC_URL;

export const title = "Vite Boilerplate";

const ghUrl = "https://github.com/nexys-system/vite_boilerplate";

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  version: `${ghUrl}/release/tag/${version}`,
  url: ghUrl,
};
