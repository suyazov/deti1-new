#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
# Keep styles.css readable; publish the generated stylesheet alongside it.
npm exec --yes --package=esbuild@0.25.10 -- esbuild styles.css --minify --charset=utf8 --outfile=styles.min.css
