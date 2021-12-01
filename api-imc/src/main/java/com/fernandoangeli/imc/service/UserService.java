package com.fernandoangeli.imc.service;

import com.fernandoangeli.imc.domain.User;
import com.fernandoangeli.imc.exception.LoginException;
import com.fernandoangeli.imc.repository.UserRepository;
import com.fernandoangeli.imc.representation.request.UserRequest;
import com.fernandoangeli.imc.representation.request.UserRequestLogin;
import com.fernandoangeli.imc.representation.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;

import static com.fernandoangeli.imc.mapper.UserMapper.toUserDomain;
import static com.fernandoangeli.imc.mapper.UserMapper.toUserResponse;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public void registerUser(UserRequest request){
        User user = toUserDomain(request);
        repository.save(user);
    }

    public UserResponse loginUser(@Valid UserRequestLogin request) {
        User user = repository.findByEmail(request.getEmail());
        if(!user.getPassword().equals(request.getPassword())){
            throw new LoginException("Usuário ou senha inválidos");
        }
        if(user == null){
            throw new LoginException("Usuário não localizado");
        }
        return toUserResponse(user);
    }
}
