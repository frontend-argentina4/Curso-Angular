package curso.angular.compania_viajes.repos;

import curso.angular.compania_viajes.domain.Colectivos;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ColectivosRepository extends JpaRepository<Colectivos, Long> {
}
