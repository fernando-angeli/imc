package com.fernandoangeli.imc.controller;

import com.fernandoangeli.imc.representation.request.UserRequest;
import com.fernandoangeli.imc.representation.request.UserRequestLogin;
import com.fernandoangeli.imc.representation.response.UserResponse;
import com.fernandoangeli.imc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("publico/cadastro")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void registerUser(@Valid @RequestBody UserRequest request){
        userService.registerUser(request);
    }

    @PostMapping("publico/login")
    @ResponseStatus(HttpStatus.OK)
    public UserResponse loginUser(@Valid @RequestBody UserRequestLogin request){
        return userService.loginUser(request);
    }

}
