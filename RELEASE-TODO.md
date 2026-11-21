# Release to-do for v0.15.3

Not part of the site (Next.js builds only `content/`, `app/` and `lib/`; nothing links here). Delete this file in
the commit that fills these in. Do not merge the `docs/v0.15.3` branch before every item under "Needs the
published release" is done: until then the pages show v0.15.2's digest and date, or `YYYY-MM-DD` and
`<v0.15.3 digest>` placeholders.

## Needs the published release

### The image digest

Replace v0.15.2's digest (`sha256:e30bef6f56de186a39431ecde67a35dc155d5c33e597918a47a3a0644a8c2c28`) with
v0.15.3's (from `open-mcp-portal-v0.15.3.digest.txt` on the GitHub release), and remove the RELEASE-TODO comment:

- `lib/site.ts:44` (`productImageDigest`; the comment at lines 41–43)
- `content/docs/operate/compose.mdx:20`, `:26`, `:33`, `:75` (the comment at line 17)
- `content/docs/operate/kubernetes.mdx:16`, `:19`, `:30` (the comment at line 14)

Replace the placeholder `<v0.15.3 digest>`:

- `content/docs/releases/v0-15-3.mdx:72` and `:78` (the comment at line 67)

### The publication date

Replace v0.15.2's date (`2026-11-10`) with v0.15.3's, and remove the RELEASE-TODO comment:

- `lib/site.ts:32` (`productReleaseDate`; the comment at lines 29–31). The landing page (`app/(home)/page.tsx:59` and
  `:112`–`113`) shows it as "released on …".
- `content/docs/operate/index.mdx:18` (the comment at line 16)
- `content/docs/get-started/index.mdx:63` (the comment at line 61)

Fill in the date where there is none yet:

- `content/docs/releases/index.mdx:8`: add ", released on <date>" after **v0.15.3** (the comment at line 6)
- `content/docs/releases/index.mdx:12`: `YYYY-MM-DD` in the table
- `content/docs/releases/v0-15-3.mdx:8`: `**Released YYYY-MM-DD.**` (the comment at line 6)
- `README.md:5`: restore "released on <date>" and drop the sentence pointing at this file

### Verification and signing identity

- `content/docs/releases/v0-15-3.mdx:49`: write the verification paragraph the way the other release pages do
  (the comment at line 47), once the publication and independent checks are done.
- **Confirm the cosign certificate identity** printed by the publication. The docs assume the tag is published from
  the transferred repository, so the identity is
  `https://github.com/bitop-dev/open-mcp-portal/.github/workflows/image.yml@refs/tags/v0.15.3`
  (the workflow prints `${GITHUB_REPOSITORY}`). If it is still `ncecere/…`, change:
  `content/docs/releases/v0-15-3.mdx:79`, `content/docs/operate/compose.mdx:27`, `content/docs/operate/kubernetes.mdx:20`,
  `content/docs/api/cli.mdx:17`, the generic recipes at `content/docs/releases/index.mdx:65` and `:74`, and the
  sentences that say releases from v0.15.3 on are signed as `bitop-dev` (`releases/index.mdx:61`, `operate/compose.mdx:31`,
  `operate/kubernetes.mdx:24`, `api/cli.mdx:23`, `releases/v0-15-3.mdx:83`).
- **Confirm the image name.** The release workflow (`.github/workflows/image.yml`, `IMAGE:`) and `deploy/kubernetes`
  still publish to `ghcr.io/ncecere/open-mcp-portal`, and the docs say so. If the publication moves the image, change
  every `ghcr.io/ncecere/open-mcp-portal` in `content/` and `lib/site.ts:38`.
- **Confirm the Kubernetes base tag.** `content/docs/operate/kubernetes.mdx:16` and `:29` say the base sets `v0.15.3`;
  on `batch/maintenance` `deploy/kubernetes/base/kustomization.yaml` and the example overlay still say `v0.15.2`.

### After the tag exists

- Resync the API reference from the tag and check the diff is empty:
  `npm run sync:openapi -- v0.15.3` (the copy was taken from `batch/maintenance` at `e686d3a`).
- Links to `https://github.com/bitop-dev/open-mcp-portal/blob/v0.15.3/…` and `/tree/v0.15.3/…` (in
  `operate/audit-stream.mdx`, `kubernetes.mdx`, `security.mdx`, `tracing.mdx`, `releases/index.mdx`, `roadmap.mdx`,
  `releases/v0-15-3.mdx`, `server-authors/mail-example.mdx`, `teams/definition-scanning.mdx`) resolve only once the
  tag exists, and `releases/v0-15-3.mdx` links to `docs/releases/v0.15.3.md`, which the release must add. The link
  checker only checks internal links.

## Screenshots

New slots, still placeholders (`npm run screenshots:check`), with their capture state in `SCREENSHOTS.md`
(rows 80–83):

- `capability-scan-findings` (`content/docs/teams/definition-scanning.mdx`)
- `admin-definition-scanning` (`content/docs/administer/definition-scanning.mdx`)
- `admin-audit-stream` (`content/docs/administer/audit-stream.mdx`)
- `audit-stream-held-row` (`content/docs/administer/audit-stream.mdx`)

Existing slots captured on v0.13.1 whose page changed since and need retaking on v0.15.3 (then check the alt text in
`lib/screenshot-slots.json`):

- Every admin page, for the new admin sidebar (the **Settings** group with Definition scanning, **Audit stream** under
  Operations): 17 `gateway-access`, 29 `admin-users`, 30 `admin-user-detail`, 31 `admin-servers-review`,
  33 `admin-publishing`, 34 `admin-internal-networks`, 35 `admin-trusted-clients`, 36 `admin-auth-providers`,
  37 `admin-auth-provider-create`, 38 `admin-limits`, 39 `admin-retention`, 40 `admin-capture`, 41 `admin-usage`,
  42 `admin-calls`, 43 `admin-audit`, 44 `admin-overview`, 45 `admin-notifications`, 46 `admin-automation-tokens`,
  47 `admin-automation-token-created`, 60 `admin-approval-rules`, 64 `gateway-access-requests`,
  75 `admin-auth-provider-access`, 76 `admin-governance`, 77 `admin-provisioning`, 78 `admin-provisioning-people`.
- 32 `admin-server-review-dialog`: the approve dialog now starts with Definition scan findings (alt text to update).
- 8 `server-capabilities` and 68 `capability-classes`: the Capabilities tab gained Definition scan findings, and the
  filter counts moved into their labels (slot 8's alt text quotes the old counts).
- 13 `publish-request`: the publish dialog now starts with Definition scan findings (alt text to update).
