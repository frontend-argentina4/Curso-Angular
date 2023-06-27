package curso.angular.compania_viajes.service;

import curso.angular.compania_viajes.domain.Colectivos;
import curso.angular.compania_viajes.domain.Persona;
import curso.angular.compania_viajes.domain.Viajes;
import curso.angular.compania_viajes.model.ViajesDTO;
import curso.angular.compania_viajes.repos.ColectivosRepository;
import curso.angular.compania_viajes.repos.PersonaRepository;
import curso.angular.compania_viajes.repos.ViajesRepository;
import curso.angular.compania_viajes.util.NotFoundException;
import jakarta.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class ViajesService {

    private final ViajesRepository viajesRepository;
    private final PersonaRepository personaRepository;
    private final ColectivosRepository colectivosRepository;

    public ViajesService(final ViajesRepository viajesRepository,
            final PersonaRepository personaRepository,
            final ColectivosRepository colectivosRepository) {
        this.viajesRepository = viajesRepository;
        this.personaRepository = personaRepository;
        this.colectivosRepository = colectivosRepository;
    }

    public List<ViajesDTO> findAll() {
        final List<Viajes> viajess = viajesRepository.findAll(Sort.by("id"));
        return viajess.stream()
                .map(viajes -> mapToDTO(viajes, new ViajesDTO()))
                .toList();
    }

    public ViajesDTO get(final Long id) {
        return viajesRepository.findById(id)
                .map(viajes -> mapToDTO(viajes, new ViajesDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final ViajesDTO viajesDTO) {
        final Viajes viajes = new Viajes();
        mapToEntity(viajesDTO, viajes);
        return viajesRepository.save(viajes).getId();
    }

    public void update(final Long id, final ViajesDTO viajesDTO) {
        final Viajes viajes = viajesRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(viajesDTO, viajes);
        viajesRepository.save(viajes);
    }

    public void delete(final Long id) {
        viajesRepository.deleteById(id);
    }

    private ViajesDTO mapToDTO(final Viajes viajes, final ViajesDTO viajesDTO) {
        viajesDTO.setId(viajes.getId());
        viajesDTO.setLugarSalida(viajes.getLugarSalida());
        viajesDTO.setLugarDestino(viajes.getLugarDestino());
        viajesDTO.setFechaLlegada(viajes.getFechaLlegada());
        viajesDTO.setFechaSalida(viajes.getFechaSalida());
        viajesDTO.setPersonaId(viajes.getPersonaId().stream()
                .map(persona -> persona.getId())
                .toList());
        viajesDTO.setIdColectivo(viajes.getIdColectivo() == null ? null : viajes.getIdColectivo().getId());
        return viajesDTO;
    }

    private Viajes mapToEntity(final ViajesDTO viajesDTO, final Viajes viajes) {
        viajes.setLugarSalida(viajesDTO.getLugarSalida());
        viajes.setLugarDestino(viajesDTO.getLugarDestino());
        viajes.setFechaLlegada(viajesDTO.getFechaLlegada());
        viajes.setFechaSalida(viajesDTO.getFechaSalida());
        final List<Persona> personaId = personaRepository.findAllById(
                viajesDTO.getPersonaId() == null ? Collections.emptyList() : viajesDTO.getPersonaId());
        if (personaId.size() != (viajesDTO.getPersonaId() == null ? 0 : viajesDTO.getPersonaId().size())) {
            throw new NotFoundException("one of personaId not found");
        }
        viajes.setPersonaId(personaId.stream().collect(Collectors.toSet()));
        final Colectivos idColectivo = viajesDTO.getIdColectivo() == null ? null : colectivosRepository.findById(viajesDTO.getIdColectivo())
                .orElseThrow(() -> new NotFoundException("idColectivo not found"));
        viajes.setIdColectivo(idColectivo);
        return viajes;
    }

}
