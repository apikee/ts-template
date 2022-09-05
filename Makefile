install: 
	npm ci

run:
	npm run dev

build:
	npm run build
	
up: 
	docker-compose up -d

upl: 
	make up && make run

down: 
	docker-compose down
