package com.hub.server.controller;

import com.hub.server.Repository.ButtonRepository;
import com.hub.server.Repository.Repository;
import com.hub.server.model.Buttons;
import com.hub.server.model.JwtRequest;
import com.hub.server.model.JwtResponse;
import com.hub.server.model.Model;
import com.hub.server.service.UserService;
import com.hub.server.utility.JWTUtility;

import javax.servlet.http.HttpServletRequest;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class HomeController {

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private UserService userService;

    @Autowired
    private Repository repository;

    @Autowired
    private ButtonRepository ButtonRepository;

    @GetMapping("/getuserrdata")
    public String home(HttpServletRequest httpServletRequest) {
        // return repository.getdata().get(0);
        String x = httpServletRequest.getHeader("Authorization");
        String token = x.substring(7);
        return "hello"+jwtUtility.getUsernameFromToken(token);
    }

    @PostMapping("/createuser")
    public String createuser(@RequestBody Model model){
        try {
            repository.save(model);
            return "ok";
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception for debugging purposes
            return "sorry"; // Return an error message
        }
    }

    @PostMapping("/authenticat")
    public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) throws Exception{

        if(repository.getlogin(jwtRequest.getUsername(),jwtRequest.getPassword())==1){

            final UserDetails userDetails
                    = userService.loadUserByUsername(jwtRequest.getUsername());
    
            final String token =
                    jwtUtility.generateToken(userDetails);
    
            return  new JwtResponse(token);
        }
        return new JwtResponse("nope");

    }


}
