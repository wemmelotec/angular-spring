package com.example.indra_api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;

/**
 * Classe utilizada para implementar a documentação da API com o Swagger.
 */
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
//                .components(
//                        new Components().addSecuritySchemes("bearerAuth",
//                                new SecurityScheme().type(SecurityScheme.Type.HTTP)
//                                        .scheme("bearer").bearerFormat("JWt")))
                .info(new Info()
                        .title("Teste Técnico API REST")
                        .description("API Rest para gerenciar um sistema de cadastro de clientes e seus respectivos benefícios, "
                                + "ela permite operações de CRUD (criar, ler, atualizar, deletar).")
                        .contact(new Contact()
                                .name("Wellington Magno")
                                .email("wellington.magno@gmail.com")
                                .url("https://wemmelo.github.io")
                        )
                        .version("Versão 1.0")
                );
                //.addSecurityItem(new SecurityRequirement().addList("bearerAuth"));
    }

}
