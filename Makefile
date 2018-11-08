.PHONY: build
build:
	mkdir -p public
	cp -r static/* public/

.PHONY: dev
dev:
	cd public && python -m SimpleHTTPServer 1313
