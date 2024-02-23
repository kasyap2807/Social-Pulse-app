package com.hub.server.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "userbuttons")
public class Buttons {

    @Id
    private long user_id;

    @Column(name = "buttons", unique = true)
    private String[] buttons;

    public Buttons() {
        this.buttons = new String[0]; // Initialize the array
    }

    // Getters and setters
    public long getUserId() {
        return user_id;
    }

    public void setUserId(long userId) {
        this.user_id = userId;
    }

    public String[] getButtons() {
        return buttons;
    }

    public void setButtons(String[] buttons) {
        this.buttons = buttons;
    }
}
