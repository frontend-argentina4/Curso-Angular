package curso.angular.compania_viajes.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import java.time.LocalDate;
import java.util.Set;


@Entity
public class Viajes {

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
    private String lugarSalida;

    @Column
    private String lugarDestino;

    @Column
    private LocalDate fechaLlegada;

    @Column
    private LocalDate fechaSalida;

    @ManyToMany
    @JoinTable(
            name = "asistencia_viajes",
            joinColumns = @JoinColumn(name = "viajes_id"),
            inverseJoinColumns = @JoinColumn(name = "persona_id")
    )
    private Set<Persona> personaId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_colectivo_id", nullable = false)
    private Colectivos idColectivo;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getLugarSalida() {
        return lugarSalida;
    }

    public void setLugarSalida(final String lugarSalida) {
        this.lugarSalida = lugarSalida;
    }

    public String getLugarDestino() {
        return lugarDestino;
    }

    public void setLugarDestino(final String lugarDestino) {
        this.lugarDestino = lugarDestino;
    }

    public LocalDate getFechaLlegada() {
        return fechaLlegada;
    }

    public void setFechaLlegada(final LocalDate fechaLlegada) {
        this.fechaLlegada = fechaLlegada;
    }

    public LocalDate getFechaSalida() {
        return fechaSalida;
    }

    public void setFechaSalida(final LocalDate fechaSalida) {
        this.fechaSalida = fechaSalida;
    }

    public Set<Persona> getPersonaId() {
        return personaId;
    }

    public void setPersonaId(final Set<Persona> personaId) {
        this.personaId = personaId;
    }

    public Colectivos getIdColectivo() {
        return idColectivo;
    }

    public void setIdColectivo(final Colectivos idColectivo) {
        this.idColectivo = idColectivo;
    }

}
