To reproduce issue:

1. Clone the repo
2. The code is currently set to use the unoptimized code. Simply launch a simple webserver from the root directory of the repo (with something like `python -m SimpleHTTPServer 8000`) and navigate to it (at `localhost:8000`, for example)
3. Observe that the stream loads
4. `cd scripts`
5. `node r.js -o build.js`
6. Change the `data-main` attribute in `index.html` from `scripts/main` to `scripts/main-built`
7. Load the page again
8. Open dev tools to see the error: `TypeError: Right-hand side of 'instanceof' is not callable`
