package curso.angular.compania_viajes.rest;

import curso.angular.compania_viajes.model.ModeloDTO;
import curso.angular.compania_viajes.service.ModeloService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
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
