# this generates a minimalistic docker image. Note that 404 is not supported
FROM lipanski/docker-static-website:latest


COPY dist .

# https://github.com/lipanski/docker-static-website/#usage
CMD ["/busybox", "httpd", "-f", "-v", "-p", "3000"]
