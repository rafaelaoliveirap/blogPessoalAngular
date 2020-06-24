package com.generation.blogPessoal.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table (name="usuarioLogin")
public class UsuarioLogin {
	
	private String nome;
	
	private String usuario;

	private String senha;
	
	private String token;
	
	private boolean vendedor;
}
