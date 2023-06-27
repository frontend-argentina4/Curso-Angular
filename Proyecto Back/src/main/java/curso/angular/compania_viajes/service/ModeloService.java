package curso.angular.compania_viajes.service;

import curso.angular.compania_viajes.domain.Modelo;
import curso.angular.compania_viajes.model.ModeloDTO;
import curso.angular.compania_viajes.repos.ModeloRepository;
import curso.angular.compania_viajes.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class ModeloService {

    private final ModeloRepository modeloRepository;

    public ModeloService(final ModeloRepository modeloRepository) {
        this.modeloRepository = modeloRepository;
    }

    public List<ModeloDTO> findAll() {
        final List<Modelo> modelos = modeloRepository.findAll(Sort.by("id"));
        return modelos.stream()
                .map(modelo -> mapToDTO(modelo, new ModeloDTO()))
                .toList();
    }

    public ModeloDTO get(final Long id) {
        return modeloRepository.findById(id)
                .map(modelo -> mapToDTO(modelo, new ModeloDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final ModeloDTO modeloDTO) {
        final Modelo modelo = new Modelo();
        mapToEntity(modeloDTO, modelo);
        return modeloRepository.save(modelo).getId();
    }

    public void update(final Long id, final ModeloDTO modeloDTO) {
        final Modelo modelo = modeloRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(modeloDTO, modelo);
        modeloRepository.save(modelo);
    }

    public void delete(final Long id) {
        modeloRepository.deleteById(id);
    }

    private ModeloDTO mapToDTO(final Modelo modelo, final ModeloDTO modeloDTO) {
        modeloDTO.setId(modelo.getId());
        modeloDTO.setNombre(modelo.getNombre());
        modeloDTO.setMarca(modelo.getMarca());
        return modeloDTO;
    }

    private Modelo mapToEntity(final ModeloDTO modeloDTO, final Modelo modelo) {
        modelo.setNombre(modeloDTO.getNombre());
        modelo.setMarca(modeloDTO.getMarca());
        return modelo;
    }

}
