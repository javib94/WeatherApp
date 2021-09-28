docker-compose rm -f
echo "Los containers han sido eliminados"
docker-compose pull
echo "Las imagenes han sido actualizadas"
docker-compose up --build -d
echo "Se ha creado un ambiente de desarrollo"
echo "API MariaDB: http://localhost:3307"
echo "API Flask:   http://localhost:5000/users"
