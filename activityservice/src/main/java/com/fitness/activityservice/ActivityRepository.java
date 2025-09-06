package com.fitness.activityservice;

import com.fitness.activityservice.model.Activity;
import io.micrometer.observation.ObservationFilter;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends MongoRepository<Activity,Long> {
    List<Activity> findByUserId(String userId);

}
