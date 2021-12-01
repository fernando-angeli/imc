package com.fernandoangeli.imc.representation.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
public class UserRequestLogin {

    @NotEmpty
    private String email;

    @NotEmpty
    private String password;

}
