package curso.angular.compania_viajes.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EntityScan("curso.angular.compania_viajes.domain")
@EnableJpaRepositories("curso.angular.compania_viajes.repos")
@EnableTransactionManagement
public class DomainConfig {
}
