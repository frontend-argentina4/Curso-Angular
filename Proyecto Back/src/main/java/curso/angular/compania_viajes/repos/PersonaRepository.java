package curso.angular.compania_viajes.repos;

import curso.angular.compania_viajes.domain.Persona;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PersonaRepository extends JpaRepository<Persona, Long> {
}
