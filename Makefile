
.PHONY: deploy
deploy:
	docker build -t acroca/code-cell.com:latest .
	docker save -o site.tar acroca/code-cell.com:latest
	scp site.tar root@do01:~/
	rm site.tar
	ssh root@do01 "docker load -i site.tar && ./run_code_cell.sh"
