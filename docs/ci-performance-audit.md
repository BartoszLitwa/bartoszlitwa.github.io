# GitHub Actions performance audit

Audit date: 2026-09-18

## Workflow inventory

- `CI` is the required pull-request quality gate and runs the existing full
  `npm run check` command.
- `Container validation` builds the production image on every `main` push and
  can be rerun manually. It is intentionally outside the required PR gate so
  the Dockerfile's second dependency install and application build do not delay
  every pull request.
- Dependabot and GitHub Pages remain GitHub-managed workflows; they are not
  repository-defined jobs and cannot be assigned a repository runner label.
- There are no Apple, reusable, or composite workflows in this repository.

## Runner policy

Both repository workflows use the verified organization runner group and the
general pool only:

```yaml
runs-on:
  group: Default
  labels: [self-hosted, Linux, X64]
```

No worker-specific labels are used. The `doifynow` organization currently
reports three online Linux/X64 runners in `Default`, all with the shared
labels `self-hosted`, `Linux`, `X64`, `t3-code-worker`, and `fleetsetup`.

There is no verified macOS runner, so no Apple workflow was added or made part
of the required gate.

## Fork safety

The PR gate uses `pull_request_target` deliberately so the workflow definition
comes from the trusted base branch before a self-hosted runner is selected.
Fork pull requests fail before checkout because no isolated runner pool exists
for untrusted code. Same-repository pull requests check out the exact head SHA
with credentials persistence disabled. This keeps the risk visible and blocks
merging fork changes instead of executing them on persistent infrastructure.

## Baseline measurements

Before this change, the latest 38 `CI` runs measured:

- 23 pull-request runs and 15 pushes;
- 18 successes, 16 failures, and 4 cancellations;
- queue p50/p95: 3s / 14.2s;
- job p50/p95: 41.5s / 121.5s;
- wall time p50/p95: 51.5s / 133.6s;
- zero same-SHA `push` plus `pull_request` duplicates.

Successful runs spent about 10s installing npm dependencies, 22s installing
Playwright, 53–54s in the quality gate, and 23s rebuilding the application in
Docker. The container build is now post-merge/manual, preserving that coverage
without repeating it in every required PR run.

Evidence: [baseline successful run](https://github.com/doifynow/bartoszlitwa.github.io/actions/runs/35277988135), [baseline failed run](https://github.com/doifynow/bartoszlitwa.github.io/actions/runs/35317875357).
