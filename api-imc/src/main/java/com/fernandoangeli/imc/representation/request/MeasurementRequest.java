package com.fernandoangeli.imc.representation.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
public class MeasurementRequest {

    @NotNull
    LocalDate date;

    @NotNull
    double weight;

    @NotNull
    double height;

    @NotNull
    Integer user_id;

}
