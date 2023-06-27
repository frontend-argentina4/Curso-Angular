package curso.angular.compania_viajes.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;


public class ColectivosDTO {

    private Long id;

    @Size(max = 255)
    private String patente;

    private Integer cantidadAsientos;

    private Long idModelo;

    @NotNull
    private Long modeloId;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getPatente() {
        return patente;
    }

    public void setPatente(final String patente) {
        this.patente = patente;
    }

    public Integer getCantidadAsientos() {
        return cantidadAsientos;
    }

    public void setCantidadAsientos(final Integer cantidadAsientos) {
        this.cantidadAsientos = cantidadAsientos;
    }

    public Long getIdModelo() {
        return idModelo;
    }

    public void setIdModelo(final Long idModelo) {
        this.idModelo = idModelo;
    }

    public Long getModeloId() {
        return modeloId;
    }

    public void setModeloId(final Long modeloId) {
        this.modeloId = modeloId;
    }

}
