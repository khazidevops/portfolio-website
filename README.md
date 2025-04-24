docker 
docker rm portfolio 

docker stop portfolio          

docker build -t khazi-portfolio .


 docker run -d -p 8080:80 --name portfolio khazi-portfolio
