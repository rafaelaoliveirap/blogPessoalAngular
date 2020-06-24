package com.generation.blogPessoal.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
@Entity
@Table (name="usuarios")
public class Usuario {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size (min=5, max=100)
	private String nome;
	
	@NotNull
	@Size (min=5, max=100)
	private String usuario;
	
	@NotNull
	@Size (min=5, max=100)
	private String senha;
	
	@NotNull
	private boolean vendedor;

	
}
