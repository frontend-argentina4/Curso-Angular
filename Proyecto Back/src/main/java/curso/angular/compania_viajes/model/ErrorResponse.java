package curso.angular.compania_viajes.model;

import java.util.List;


public class ErrorResponse {

    private Integer httpStatus;
    private String exception;
    private String message;
    private List<FieldError> fieldErrors;

    public Integer getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(final Integer httpStatus) {
        this.httpStatus = httpStatus;
    }

    public String getException() {
        return exception;
    }

    public void setException(final String exception) {
        this.exception = exception;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(final String message) {
        this.message = message;
    }

    public List<FieldError> getFieldErrors() {
        return fieldErrors;
    }

    public void setFieldErrors(final List<FieldError> fieldErrors) {
        this.fieldErrors = fieldErrors;
    }

}
