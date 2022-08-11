# this generates a minimalistic docker image
# see https://github.com/lipanski/docker-static-website/#usage
FROM lipanski/docker-static-website:2.1.0

COPY httpd.conf .
COPY dist .

# https://github.com/lipanski/docker-static-website/#usage
CMD ["/busybox", "httpd", "-f", "-v", "-p", "3000", "-c", "httpd.conf"]
