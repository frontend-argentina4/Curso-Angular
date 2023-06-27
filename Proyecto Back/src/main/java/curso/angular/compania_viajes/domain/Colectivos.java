package curso.angular.compania_viajes.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;


@Entity
public class Colectivos {

    @Id
    @Column(nullable = false, updatable = false)
    @SequenceGenerator(
            name = "primary_sequence",
            sequenceName = "primary_sequence",
            allocationSize = 1,
            initialValue = 10000
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "primary_sequence"
    )
    private Long id;

    @Column
    private String patente;

    @Column
    private Integer cantidadAsientos;

    @Column
    private Long idModelo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "modelo_id_id", nullable = false)
    private Modelo modeloId;

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

    public Modelo getModeloId() {
        return modeloId;
    }

    public void setModeloId(final Modelo modeloId) {
        this.modeloId = modeloId;
    }

}
