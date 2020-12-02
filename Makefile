nginx:
	@nginx -t -c ~/go/src/gitlab.com/nursing-home/nh-platform-ui/mynginx.conf -g "pid /var/run/nginx.pid; worker_processes 2;"
