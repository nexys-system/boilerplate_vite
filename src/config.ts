export const version = import.meta.env.VITE_VERSION || "unset_version";
export const sha = import.meta.env.GIT_SHA || "unset_sha";
export const basename = import.meta.env.PUBLIC_URL;

export const title = "Vite Boilerplate";

const { env } = import.meta;

const ghUrl = "https://github.com/nexys-system/boilerplate_vite";

console.log({ env });

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  version: `${ghUrl}/release/tag/${version}`,
  url: ghUrl,
};
