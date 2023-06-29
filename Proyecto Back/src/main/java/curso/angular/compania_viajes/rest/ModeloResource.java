package curso.angular.compania_viajes.rest;

import curso.angular.compania_viajes.model.ModeloDTO;
import curso.angular.compania_viajes.service.ModeloService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
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
    public ResponseEntity<ModeloDTO> getModelo(@PathVariable(name = "id") final Long id) {
        return ResponseEntity.ok(modeloService.get(id));
    }
}
