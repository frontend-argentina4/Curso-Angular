package curso.angular.compania_viajes.service;

import curso.angular.compania_viajes.domain.Colectivos;
import curso.angular.compania_viajes.domain.Modelo;
import curso.angular.compania_viajes.model.ColectivosDTO;
import curso.angular.compania_viajes.repos.ColectivosRepository;
import curso.angular.compania_viajes.repos.ModeloRepository;
import curso.angular.compania_viajes.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class ColectivosService {

    private final ColectivosRepository colectivosRepository;
    private final ModeloRepository modeloRepository;

    public ColectivosService(final ColectivosRepository colectivosRepository,
            final ModeloRepository modeloRepository) {
        this.colectivosRepository = colectivosRepository;
        this.modeloRepository = modeloRepository;
    }

    public List<ColectivosDTO> findAll() {
        final List<Colectivos> colectivoss = colectivosRepository.findAll(Sort.by("id"));
        return colectivoss.stream()
                .map(colectivos -> mapToDTO(colectivos, new ColectivosDTO()))
                .toList();
    }

    public ColectivosDTO get(final Long id) {
        return colectivosRepository.findById(id)
                .map(colectivos -> mapToDTO(colectivos, new ColectivosDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final ColectivosDTO colectivosDTO) {
        final Colectivos colectivos = new Colectivos();
        mapToEntity(colectivosDTO, colectivos);
        return colectivosRepository.save(colectivos).getId();
    }

    public void update(final Long id, final ColectivosDTO colectivosDTO) {
        final Colectivos colectivos = colectivosRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(colectivosDTO, colectivos);
        colectivosRepository.save(colectivos);
    }

    public void delete(final Long id) {
        colectivosRepository.deleteById(id);
    }

    private ColectivosDTO mapToDTO(final Colectivos colectivos, final ColectivosDTO colectivosDTO) {
        colectivosDTO.setId(colectivos.getId());
        colectivosDTO.setPatente(colectivos.getPatente());
        colectivosDTO.setCantidadAsientos(colectivos.getCantidadAsientos());
        colectivosDTO.setIdModelo(colectivos.getIdModelo());
        colectivosDTO.setModeloId(colectivos.getModeloId() == null ? null : colectivos.getModeloId().getId());
        return colectivosDTO;
    }

    private Colectivos mapToEntity(final ColectivosDTO colectivosDTO, final Colectivos colectivos) {
        colectivos.setPatente(colectivosDTO.getPatente());
        colectivos.setCantidadAsientos(colectivosDTO.getCantidadAsientos());
        colectivos.setIdModelo(colectivosDTO.getIdModelo());
        final Modelo modeloId = colectivosDTO.getModeloId() == null ? null : modeloRepository.findById(colectivosDTO.getModeloId())
                .orElseThrow(() -> new NotFoundException("modeloId not found"));
        colectivos.setModeloId(modeloId);
        return colectivos;
    }

}
