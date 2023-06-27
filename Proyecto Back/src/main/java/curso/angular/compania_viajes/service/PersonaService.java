package curso.angular.compania_viajes.service;

import curso.angular.compania_viajes.domain.Persona;
import curso.angular.compania_viajes.model.PersonaDTO;
import curso.angular.compania_viajes.repos.PersonaRepository;
import curso.angular.compania_viajes.repos.ViajesRepository;
import curso.angular.compania_viajes.util.NotFoundException;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class PersonaService {

    private final PersonaRepository personaRepository;
    private final ViajesRepository viajesRepository;

    public PersonaService(final PersonaRepository personaRepository,
            final ViajesRepository viajesRepository) {
        this.personaRepository = personaRepository;
        this.viajesRepository = viajesRepository;
    }

    public List<PersonaDTO> findAll() {
        final List<Persona> personas = personaRepository.findAll(Sort.by("id"));
        return personas.stream()
                .map(persona -> mapToDTO(persona, new PersonaDTO()))
                .toList();
    }

    public PersonaDTO get(final Long id) {
        return personaRepository.findById(id)
                .map(persona -> mapToDTO(persona, new PersonaDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final PersonaDTO personaDTO) {
        final Persona persona = new Persona();
        mapToEntity(personaDTO, persona);
        return personaRepository.save(persona).getId();
    }

    public void update(final Long id, final PersonaDTO personaDTO) {
        final Persona persona = personaRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(personaDTO, persona);
        personaRepository.save(persona);
    }

    public void delete(final Long id) {
        final Persona persona = personaRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        // remove many-to-many relations at owning side
        viajesRepository.findAllByPersonaId(persona)
                .forEach(viajes -> viajes.getPersonaId().remove(persona));
        personaRepository.delete(persona);
    }

    private PersonaDTO mapToDTO(final Persona persona, final PersonaDTO personaDTO) {
        personaDTO.setId(persona.getId());
        personaDTO.setName(persona.getName());
        personaDTO.setLastName(persona.getLastName());
        personaDTO.setAge(persona.getAge());
        return personaDTO;
    }

    private Persona mapToEntity(final PersonaDTO personaDTO, final Persona persona) {
        persona.setName(personaDTO.getName());
        persona.setLastName(personaDTO.getLastName());
        persona.setAge(personaDTO.getAge());
        return persona;
    }

}
