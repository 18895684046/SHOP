TAG?=0.0.1
NAME:=template-web
DOCKER_REPOSITORY:=hub.bilibili.co/lifajin
DOCKER_IMAGE_NAME:=$(DOCKER_REPOSITORY)/$(NAME)
GIT_COMMIT:=$(shell git describe --dirty --always)
VERSION:=$(shell grep '"version"' package.json | awk '{ print $$2 }' | tr -d '"' | tr -d ',')
EXTRA_RUN_ARGS?=

run:
	yarn start

.PHONY: test
test:
	@echo "$(VERSION)"

build-base:
	docker build -f Dockerfile.base -t $(DOCKER_IMAGE_NAME):base .

push-base: build-base
	docker push $(DOCKER_IMAGE_NAME):base

.PHONY: build
build:
	docker build -f Dockerfile -t $(DOCKER_IMAGE_NAME):$(VERSION) .

test-container:
	@docker rm -f template-web || true
	@docker run -dp 10001:80 --name=template-web $(DOCKER_IMAGE_NAME):$(VERSION)
	@docker ps | grep template-web
	@curl -s http://127.0.0.1:10001/template/

push-container:
	docker tag $(DOCKER_IMAGE_NAME):$(VERSION) $(DOCKER_IMAGE_NAME):latest
	docker push $(DOCKER_IMAGE_NAME):$(VERSION)
	docker push $(DOCKER_IMAGE_NAME):latest

version-set:
	next="$(TAG)" && \
	current="$(VERSION)" && \
	sed -i '' "s/\"version\": \"$$current\",/\"version\": \"$$next\",/g" package.json && \
	sed -i '' "s/template-web:$$current/template-web:$$next/g" kustomize/deployment.yaml && \
	echo "Version $$next set in code, deployment and kustomize"

release:
	git tag $(VERSION)
	git push origin $(VERSION)