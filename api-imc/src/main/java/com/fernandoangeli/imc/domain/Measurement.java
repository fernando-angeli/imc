package com.fernandoangeli.imc.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "i_measurements")
@SequenceGenerator(name = "i_seq_measurements", sequenceName = "i_seq_measurements", allocationSize = 1)
public class Measurement {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "i_seq_measurements")
    private Integer id;

    @Column
    private LocalDate date;

    @Column(name = "weight")
    private double weight;

    @Column(name = "height")
    private double height;

    @Column(name = "user_id")
    private Integer user_id;

}
