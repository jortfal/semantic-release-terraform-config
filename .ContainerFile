FROM debian:bookworm-slim

ARG DEBIAN_FRONTEND=noninteractive

# Update Local Repository Index and Install apt-utils
RUN apt-get update && apt-get -y --no-install-recommends install apt-utils

# Install custom 
RUN \
  apt-get -y --no-install-recommends install \
    sudo \
    bash \
    procps \
    openssl \
    gnupg \
    lsb-release \
    ca-certificates \
    apt-transport-https \
    software-properties-common \
    curl \
    wget \
    unzip \
    python3-pip \
    vim \
    git

# Install nvm (Node Version Manager)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Download and install Node.js
RUN nvm install 20.14.0
