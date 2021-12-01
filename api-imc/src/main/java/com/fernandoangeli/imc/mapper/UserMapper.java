package com.fernandoangeli.imc.mapper;

import com.fernandoangeli.imc.domain.User;
import com.fernandoangeli.imc.representation.request.UserRequest;
import com.fernandoangeli.imc.representation.response.UserResponse;
import org.modelmapper.ModelMapper;

public class UserMapper {

    private static ModelMapper mapper = new ModelMapper();

    public static User toUserDomain(UserRequest request){
        return mapper.map(request, User.class);
    }

    public static UserResponse toUserResponse(User user){
        return mapper.map(user, UserResponse.class);
    }

}
