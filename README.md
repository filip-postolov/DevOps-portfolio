## DevOps Portfolio Project

A simple cloud-native web application demonstrating a modern DevOps workflow using containerization, orchestration, and automated CI/CD deployment.

The project showcases how to build, package, and deploy a React application using Docker, Kubernetes, AWS EC2, and GitHub Actions.

Architecture Overview

Developer → GitHub → GitHub Actions → Docker Image → Kubernetes (EC2) → Users

## Tech Stack

Frontend: **React**

Web Server: **Nginx**

Containerization: **Docker**

Orchestration: **Kubernetes (k3s)**

Cloud Infrastructure: **AWS EC2**

CI/CD: **GitHub Actions**

## Docker Setup

This project uses a multi-stage Docker build to produce a lightweight production image.

The first stage builds the React application using Node.js, while the second stage serves the static files using Nginx.

Build the image:

**docker build -t devops-portfolio -f frontend/Dockerfile frontend**

Run the container:

**docker run -d -p 8080:80 devops-portfolio**

Then open:

**http://localhost:8080**

## Live Demo

You can view the deployed application here:

🔗 **Live Demo:** **http://16.170.15.52:30008/**
