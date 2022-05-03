export const title = "Vite Boilerplate";

export const version: string = import.meta.env.VITE_VERSION || "unset_version";
export const sha: string = import.meta.env.GIT_SHA || "unset_sha";
export const basename = import.meta.env.BASE_URL;

const { env } = import.meta;

console.log({ env });

const ghUrl = "https://github.com/nexys-system/boilerplate_vite";

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  version: `${ghUrl}/release/tag/${version}`,
  url: ghUrl,
};
