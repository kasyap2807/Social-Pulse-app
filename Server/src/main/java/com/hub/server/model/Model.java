package com.hub.server.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name = "User")
public class Model {
    // table def  

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_id;

    @Column(name="username",unique = true)
    private String username;

    @Column(name = "Password")
    private String password;

    @Column(name = "Email")
    private String email;

    @Column(name = "name")
    private String name;



    // Constructor
    
    public Model(long user_id, String username, String password, String email,String name) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
    }


    // Empty Constructor 
    
    public Model() {
    }


    // getter and setter methods
    public long getUser_id() {
        return user_id;
    }




    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }

    


    
}


