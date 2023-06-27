package curso.angular.compania_viajes.rest;

import curso.angular.compania_viajes.model.PersonaDTO;
import curso.angular.compania_viajes.service.PersonaService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin()
@RequestMapping(value = "/api/personas", produces = MediaType.APPLICATION_JSON_VALUE)
public class PersonaResource {

    private final PersonaService personaService;

    public PersonaResource(final PersonaService personaService) {
        this.personaService = personaService;
    }

    @GetMapping
    public ResponseEntity<List<PersonaDTO>> getAllPersonas() {
        return ResponseEntity.ok(personaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PersonaDTO> getPersona(@PathVariable final Long id) {
        return ResponseEntity.ok(personaService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createPersona(@RequestBody @Valid final PersonaDTO personaDTO) {
        final Long createdId = personaService.create(personaDTO);
        return new ResponseEntity<>(createdId, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updatePersona(@PathVariable final Long id,
            @RequestBody @Valid final PersonaDTO personaDTO) {
        personaService.update(id, personaDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersona(@PathVariable final Long id) {
        personaService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
