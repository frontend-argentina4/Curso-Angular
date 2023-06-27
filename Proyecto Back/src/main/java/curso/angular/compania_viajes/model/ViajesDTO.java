package curso.angular.compania_viajes.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;


public class ViajesDTO {

    private Long id;

    @Size(max = 255)
    private String lugarSalida;

    @Size(max = 255)
    private String lugarDestino;

    private LocalDate fechaLlegada;

    private LocalDate fechaSalida;

    private List<Long> personaId;

    @NotNull
    private Long idColectivo;

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

    public List<Long> getPersonaId() {
        return personaId;
    }

    public void setPersonaId(final List<Long> personaId) {
        this.personaId = personaId;
    }

    public Long getIdColectivo() {
        return idColectivo;
    }

    public void setIdColectivo(final Long idColectivo) {
        this.idColectivo = idColectivo;
    }

}
