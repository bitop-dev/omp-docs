/*
 * The site's addresses, repositories and the release it describes, in one
 * place so they are easy to change. Everything else imports from here.
 */

/** The published docs. Used for absolute URLs (Open Graph, metadata). */
export const siteUrl = 'https://docs.omp.bitop.dev';

/** The product's own website. */
export const productSite = 'https://omp.bitop.dev';

/** The docs' own repository: "Edit on GitHub" links point here. */
export const gitConfig = {
  user: 'bitop-dev',
  repo: 'omp-docs',
  branch: 'main',
};

/**
 * The product's repository. It moved from github.com/ncecere/open-mcp-portal,
 * which still redirects here. The container image moved in v0.15.3.
 */
export const productRepo = 'https://github.com/bitop-dev/open-mcp-portal';

/** The Open MCP Portal release these docs describe. */
export const productVersion = 'v0.15.3';

/**
 * The date the release was published (YYYY-MM-DD).
 */
export const productReleaseDate = '2026-11-21';

/** The release's page on GitHub. */
export const productReleaseUrl = `${productRepo}/releases/tag/${productVersion}`;

/** The release's container image, signed with cosign keyless signing. */
export const productImage = `ghcr.io/bitop-dev/open-mcp-portal:${productVersion}`;

/**
 * The digest of the release's image (verify the signature, then pin this).
 */
export const productImageDigest = 'sha256:bae00dfda49eec8ed3dc0625b8276f677259d763da9f2904fd1ab8fab3212afa';

export const appName = 'Open MCP Portal docs';
export const docsRoute = '/docs';

export const docsRepoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export function editUrl(path: string): string {
  return `${docsRepoUrl}/blob/${gitConfig.branch}/${path}`;
}
