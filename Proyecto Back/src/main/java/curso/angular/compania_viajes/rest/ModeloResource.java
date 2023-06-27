package curso.angular.compania_viajes.rest;

import curso.angular.compania_viajes.model.ModeloDTO;
import curso.angular.compania_viajes.service.ModeloService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin()
@RequestMapping(value = "/api/modelos", produces = MediaType.APPLICATION_JSON_VALUE)
public class ModeloResource {

    private final ModeloService modeloService;

    public ModeloResource(final ModeloService modeloService) {
        this.modeloService = modeloService;
    }

    @GetMapping
    public ResponseEntity<List<ModeloDTO>> getAllModelos() {
        return ResponseEntity.ok(modeloService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ModeloDTO> getModelo(@PathVariable final Long id) {
        return ResponseEntity.ok(modeloService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createModelo(@RequestBody @Valid final ModeloDTO modeloDTO) {
        final Long createdId = modeloService.create(modeloDTO);
        return new ResponseEntity<>(createdId, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateModelo(@PathVariable final Long id,
            @RequestBody @Valid final ModeloDTO modeloDTO) {
        modeloService.update(id, modeloDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteModelo(@PathVariable final Long id) {
        modeloService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
