### INSTALLING DOCKER

```bash
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/rhel/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

```bash
sudo usermod -aG docker ec2-user
```

### BUILDING A DOCKER IMAGE

```bash
docker build -t <image_name>:<version> .
```

### RUNNING A DOCKER CONTAINER OF THE IMAGE

```bash
docker run -d -p <host_port>:<container_port> <image_name>
docker run <image_name>
```

### LABELS

```bash
docker images --filter "label=Age=23"
```

### PUSHING TO DOCKER HUB

```bash
docker login -u satyology
```

```bash
docker tag vardha:v2 satyology/vardha:v2
```

```bash
docker push satyology/vardha:v2
```

### ENTER INTO A DOCKER SHELL

```bash
docker exec -it 3d10ee9a2ff5 bash
```
