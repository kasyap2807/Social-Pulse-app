package com.hub.server.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hub.server.model.Model;

public interface Repository extends JpaRepository<Model,Long>{
     @Query(value = "select count(*) from user where username = :username and password= :password",nativeQuery = true)
    long getlogin(@Param("username") String username,@Param("password") String password);

    @Query(value = "select * from user where username = :username",nativeQuery = true)
    List getdata(@Param("username") String username);

    @Query(value = "select user_id from user where username = :username",nativeQuery = true)
    List<Long> getid(@Param("username") String username);

}
