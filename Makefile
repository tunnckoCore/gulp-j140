TESTS = test.js
REPORTER = spec
TIMEOUT = 2000
MOCHA_OPTS =

test:
	@./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

start: test
	node example.js

.PHONY: test start