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
