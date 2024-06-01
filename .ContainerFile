FROM debian:bookworm-slim

ARG DEBIAN_FRONTEND=noninteractive
ARG NVM_VERSION=v0.39.7
ARG NODEJS_VERSION=20.14.0

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
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh | bash
RUN export NVM_DIR="$HOME/.nvm"  && \
  \. "$NVM_DIR/nvm.sh"  && \
  \. "$NVM_DIR/bash_completion"  && \
  # Download and install Node.js
  nvm install $NODEJS_VERSION  
