package curso.angular.compania_viajes.repos;

import curso.angular.compania_viajes.domain.Persona;
import curso.angular.compania_viajes.domain.Viajes;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ViajesRepository extends JpaRepository<Viajes, Long> {

    List<Viajes> findAllByPersonaId(Persona persona);

}
