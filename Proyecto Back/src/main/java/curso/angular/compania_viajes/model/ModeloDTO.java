package curso.angular.compania_viajes.model;

import jakarta.validation.constraints.Size;


public class ModeloDTO {

    private Long id;

    @Size(max = 255)
    private String nombre;

    @Size(max = 255)
    private String marca;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(final String nombre) {
        this.nombre = nombre;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(final String marca) {
        this.marca = marca;
    }

}
