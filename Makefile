install:
		npm install

lint:
		npx eslint .

publish:
		npm publish --dry-run

brain-even:
		node bin/brain-even.js

brain-calc:
		node bin/brain-calc.js