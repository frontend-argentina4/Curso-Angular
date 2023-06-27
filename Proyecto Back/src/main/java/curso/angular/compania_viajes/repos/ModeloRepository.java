package curso.angular.compania_viajes.repos;

import curso.angular.compania_viajes.domain.Modelo;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ModeloRepository extends JpaRepository<Modelo, Long> {
}
