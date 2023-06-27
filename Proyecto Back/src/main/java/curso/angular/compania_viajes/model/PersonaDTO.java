package curso.angular.compania_viajes.model;

import jakarta.validation.constraints.Size;


public class PersonaDTO {

    private Long id;

    @Size(max = 255)
    private String name;

    @Size(max = 255)
    private String lastName;

    private Integer age;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(final String lastName) {
        this.lastName = lastName;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(final Integer age) {
        this.age = age;
    }

}
