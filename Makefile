install:
		npm ci

lint:
		npx eslint .

publish:
		npm publish --dry-run

game-linux:
		chmod +x bin/brain-calc.js
		chmod +x bin/brain-even.js
		chmod +x bin/brain-games.js
		chmod +x bin/brain-gcd.js
		chmod +x bin/brain-prime.js
		chmod +x bin/brain-progression.js
		npm link

game-windows:
		npm link

game-uninstall:
		npm unlink