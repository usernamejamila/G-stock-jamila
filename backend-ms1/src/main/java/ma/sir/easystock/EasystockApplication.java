package  ma.sir.easystock;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import java.util.*;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import org.springframework.cache.annotation.EnableCaching;


import ma.sir.easystock.bean.core.*;
import ma.sir.easystock.service.facade.admin.*;

import ma.sir.easystock.zynerator.security.common.AuthoritiesConstants;
import ma.sir.easystock.zynerator.security.bean.User;
import ma.sir.easystock.zynerator.security.bean.Permission;
import ma.sir.easystock.zynerator.security.bean.Role;
import ma.sir.easystock.zynerator.security.service.facade.UserService;
import ma.sir.easystock.zynerator.security.service.facade.RoleService;


import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableCaching
//@EnableFeignClients("ma.sir.easystock.required.facade")
public class EasystockApplication {
    public static ConfigurableApplicationContext ctx;

    public static void main(String[] args) {
        ctx=SpringApplication.run(EasystockApplication.class, args);
    }


    @Bean
    RestTemplate restTemplate(){
        return new RestTemplate();
    }
    @Autowired
    private ObjectMapper objectMapper;

    @Bean
    ObjectMapper objectMapper(){
        return new ObjectMapper();
    }
    public static ConfigurableApplicationContext getCtx() {
        return ctx;
    }

    @Bean
    public CommandLineRunner demo(UserService userService, RoleService roleService) {
    return (args) -> {
        if(true){



    // Role admin

        User userForAdmin = new User("admin");

        Role roleForAdmin = new Role();
        roleForAdmin.setAuthority(AuthoritiesConstants.ADMIN);
        List<Permission> permissionsForAdmin = new ArrayList<>();
        addPermissionForAdmin(permissionsForAdmin);
        roleForAdmin.setPermissions(permissionsForAdmin);
        if(userForAdmin.getRoles()==null)
            userForAdmin.setRoles(new ArrayList<>());

        userForAdmin.getRoles().add(roleForAdmin);
        userService.save(userForAdmin);
            }
        };
    }




    private static String fakeString(String attributeName, int i) {
        return attributeName + i;
    }

    private static Long fakeLong(String attributeName, int i) {
        return  10L * i;
    }
    private static Integer fakeInteger(String attributeName, int i) {
        return  10 * i;
    }

    private static Double fakeDouble(String attributeName, int i) {
        return 10D * i;
    }

    private static BigDecimal fakeBigDecimal(String attributeName, int i) {
        return  BigDecimal.valueOf(i*1L*10);
    }

    private static Boolean fakeBoolean(String attributeName, int i) {
        return i % 2 == 0 ? true : false;
    }
    private static LocalDateTime fakeLocalDateTime(String attributeName, int i) {
        return LocalDateTime.now().plusDays(i);
    }
    private static void addPermissionForAdmin(List<Permission> permissions){
        permissions.add(new Permission("Store.edit"));
        permissions.add(new Permission("Store.list"));
        permissions.add(new Permission("Store.view"));
        permissions.add(new Permission("Store.add"));
        permissions.add(new Permission("Store.delete"));
        permissions.add(new Permission("Reception.edit"));
        permissions.add(new Permission("Reception.list"));
        permissions.add(new Permission("Reception.view"));
        permissions.add(new Permission("Reception.add"));
        permissions.add(new Permission("Reception.delete"));
        permissions.add(new Permission("EtatReception.edit"));
        permissions.add(new Permission("EtatReception.list"));
        permissions.add(new Permission("EtatReception.view"));
        permissions.add(new Permission("EtatReception.add"));
        permissions.add(new Permission("EtatReception.delete"));
        permissions.add(new Permission("EtatCommande.edit"));
        permissions.add(new Permission("EtatCommande.list"));
        permissions.add(new Permission("EtatCommande.view"));
        permissions.add(new Permission("EtatCommande.add"));
        permissions.add(new Permission("EtatCommande.delete"));
        permissions.add(new Permission("Magasin.edit"));
        permissions.add(new Permission("Magasin.list"));
        permissions.add(new Permission("Magasin.view"));
        permissions.add(new Permission("Magasin.add"));
        permissions.add(new Permission("Magasin.delete"));
        permissions.add(new Permission("ReceptionItem.edit"));
        permissions.add(new Permission("ReceptionItem.list"));
        permissions.add(new Permission("ReceptionItem.view"));
        permissions.add(new Permission("ReceptionItem.add"));
        permissions.add(new Permission("ReceptionItem.delete"));
        permissions.add(new Permission("PaiementCommande.edit"));
        permissions.add(new Permission("PaiementCommande.list"));
        permissions.add(new Permission("PaiementCommande.view"));
        permissions.add(new Permission("PaiementCommande.add"));
        permissions.add(new Permission("PaiementCommande.delete"));
        permissions.add(new Permission("StockProduit.edit"));
        permissions.add(new Permission("StockProduit.list"));
        permissions.add(new Permission("StockProduit.view"));
        permissions.add(new Permission("StockProduit.add"));
        permissions.add(new Permission("StockProduit.delete"));
        permissions.add(new Permission("CommandeItem.edit"));
        permissions.add(new Permission("CommandeItem.list"));
        permissions.add(new Permission("CommandeItem.view"));
        permissions.add(new Permission("CommandeItem.add"));
        permissions.add(new Permission("CommandeItem.delete"));
        permissions.add(new Permission("Abonne.edit"));
        permissions.add(new Permission("Abonne.list"));
        permissions.add(new Permission("Abonne.view"));
        permissions.add(new Permission("Abonne.add"));
        permissions.add(new Permission("Abonne.delete"));
        permissions.add(new Permission("Commande.edit"));
        permissions.add(new Permission("Commande.list"));
        permissions.add(new Permission("Commande.view"));
        permissions.add(new Permission("Commande.add"));
        permissions.add(new Permission("Commande.delete"));
        permissions.add(new Permission("UniteMesure.edit"));
        permissions.add(new Permission("UniteMesure.list"));
        permissions.add(new Permission("UniteMesure.view"));
        permissions.add(new Permission("UniteMesure.add"));
        permissions.add(new Permission("UniteMesure.delete"));
        permissions.add(new Permission("Produit.edit"));
        permissions.add(new Permission("Produit.list"));
        permissions.add(new Permission("Produit.view"));
        permissions.add(new Permission("Produit.add"));
        permissions.add(new Permission("Produit.delete"));
        permissions.add(new Permission("ModePaiement.edit"));
        permissions.add(new Permission("ModePaiement.list"));
        permissions.add(new Permission("ModePaiement.view"));
        permissions.add(new Permission("ModePaiement.add"));
        permissions.add(new Permission("ModePaiement.delete"));
        permissions.add(new Permission("CategorieProduit.edit"));
        permissions.add(new Permission("CategorieProduit.list"));
        permissions.add(new Permission("CategorieProduit.view"));
        permissions.add(new Permission("CategorieProduit.add"));
        permissions.add(new Permission("CategorieProduit.delete"));
        permissions.add(new Permission("EtatPaiementCommande.edit"));
        permissions.add(new Permission("EtatPaiementCommande.list"));
        permissions.add(new Permission("EtatPaiementCommande.view"));
        permissions.add(new Permission("EtatPaiementCommande.add"));
        permissions.add(new Permission("EtatPaiementCommande.delete"));
        permissions.add(new Permission("Marque.edit"));
        permissions.add(new Permission("Marque.list"));
        permissions.add(new Permission("Marque.view"));
        permissions.add(new Permission("Marque.add"));
        permissions.add(new Permission("Marque.delete"));
    }

}


