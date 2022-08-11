# Boilerplate for Vite Project

[![Test](https://github.com/nexys-system/boilerplate_vite/actions/workflows/test.yml/badge.svg)](https://github.com/nexys-system/boilerplate_vite/actions/workflows/test.yml)
[![Deploy](https://github.com/nexys-system/boilerplate_vite/actions/workflows/deploy.yml/badge.svg)](https://github.com/nexys-system/boilerplate_vite/actions/workflows/deploy.yml)
[![Docker](https://github.com/nexys-system/boilerplate_vite/actions/workflows/docker.yml/badge.svg)](https://github.com/nexys-system/boilerplate_vite/actions/workflows/docker.yml)

This template repo allows you to create a JS app with [Vite](https://vitejs.dev/) in less than a minute with CI and CD - leveraging [Github actions](https://github.com/features/actions).

## Get started

![get started](./recording.gif)

Just click on "use this template" to create a github repo of your own.
Locally:
* clone
* `yarn` (to install dependencies)
* `yarn start` to start a dev server

### Deployment

Deployment is triggered for every new tag/release. [See instructions on how to create a new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).

#### Github Pages

The project is configured to be deployed to github pages automatically. Make sure you have your keypair uploaded, see [instructions](https://github.com/marketplace/actions/deploy-to-github-pages#using-an-ssh-deploy-key-)

#### Docker Container

A Docker container is generated for every release. Runs on port `3000`. [See the list of generated Docker containers](https://github.com/nexys-system/boilerplate_vite/pkgs/container/boilerplate_vite%2Fboilerplate_vite)

### Best Practices

When deployed via the docker container, the website gets a perfect score with [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)

![Lightouse screenshot made on Aug 11 with a docker deployment, v0.0.21](./lightouse-screenshot.png)

## Included resources

### Bootstrap

https://getbootstrap.com/docs/5.0/content

### Font-awesome

[version 6.1.1](https://cdnjs.com/libraries/font-awesome)

Browse available icons: https://fontawesome.com/search


## More

see [headless](https://github.com/nexys-system/react-headless) to be able to create Admin UI easily
