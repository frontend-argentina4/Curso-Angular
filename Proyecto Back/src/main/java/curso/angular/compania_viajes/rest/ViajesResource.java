package curso.angular.compania_viajes.rest;

import curso.angular.compania_viajes.model.ViajesDTO;
import curso.angular.compania_viajes.service.ViajesService;
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
@RequestMapping(value = "/api/viajes", produces = MediaType.APPLICATION_JSON_VALUE)
public class ViajesResource {

    private final ViajesService viajesService;

    public ViajesResource(final ViajesService viajesService) {
        this.viajesService = viajesService;
    }

    @GetMapping
    public ResponseEntity<List<ViajesDTO>> getAllViajess() {
        return ResponseEntity.ok(viajesService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ViajesDTO> getViajes(@PathVariable(name = "id") final Long id) {
        return ResponseEntity.ok(viajesService.get(id));
    }

    @PostMapping
    @ApiResponse(responseCode = "201")
    public ResponseEntity<Long> createViajes(@RequestBody @Valid final ViajesDTO viajesDTO) {
        final Long createdId = viajesService.create(viajesDTO);
        return new ResponseEntity<>(createdId, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateViajes(@PathVariable(name = "id") final Long id,
            @RequestBody @Valid final ViajesDTO viajesDTO) {
        viajesService.update(id, viajesDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    @ApiResponse(responseCode = "204")
    public ResponseEntity<Void> deleteViajes(@PathVariable(name = "id") final Long id) {
        viajesService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
