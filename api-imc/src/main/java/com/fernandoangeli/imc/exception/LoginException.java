package com.fernandoangeli.imc.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
public class LoginException extends RuntimeException {

    public LoginException(String message) {
        super(message);
    }
}