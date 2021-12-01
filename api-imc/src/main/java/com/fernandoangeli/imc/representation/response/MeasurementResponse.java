package com.fernandoangeli.imc.representation.response;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
public class MeasurementResponse {

    Integer id;

    LocalDate date;

    double weight;

    double height;
}
