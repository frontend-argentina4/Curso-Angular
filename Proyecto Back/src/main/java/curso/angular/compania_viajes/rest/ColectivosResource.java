package curso.angular.compania_viajes.rest;

import curso.angular.compania_viajes.model.ColectivosDTO;
import curso.angular.compania_viajes.service.ColectivosService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin()
@RequestMapping(value = "/api/colectivos", produces = MediaType.APPLICATION_JSON_VALUE)
public class ColectivosResource {

    private final ColectivosService colectivosService;

    public ColectivosResource(final ColectivosService colectivosService) {
        this.colectivosService = colectivosService;
    }

    @GetMapping
    public ResponseEntity<List<ColectivosDTO>> getAllColectivoss() {
        return ResponseEntity.ok(colectivosService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ColectivosDTO> getColectivos(@PathVariable final Long id) {
        return ResponseEntity.ok(colectivosService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createColectivos(
            @RequestBody @Valid final ColectivosDTO colectivosDTO) {
        final Long createdId = colectivosService.create(colectivosDTO);
        return new ResponseEntity<>(createdId, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateColectivos(@PathVariable final Long id,
            @RequestBody @Valid final ColectivosDTO colectivosDTO) {
        colectivosService.update(id, colectivosDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteColectivos(@PathVariable final Long id) {
        colectivosService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
