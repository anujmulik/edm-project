package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Chauffeur;
import com.avengers.zipcar.service.ChauffeurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChauffeurController {

    @Autowired
    private ChauffeurService chauffeurService;

    @RequestMapping("/api/chauffeur/all")
    public List<Chauffeur> getAllChauffeur() {
        return chauffeurService.getAllChauffeurs();
    }

    @PostMapping("/api/chauffeur")
    public void addNewChauffeur(@RequestBody Chauffeur chauffeur) {
        chauffeurService.addChauffeur(chauffeur);
    }

    @DeleteMapping("/api/chauffeur/{employeeId}")
    public void deleteChauffeur(@PathVariable String employeeId) {
        chauffeurService.deleteChauffeur(employeeId);
    }

    @PutMapping("/api/chauffeur/{employeeId}")
    public void updateChauffeur(@PathVariable String employeeId, @RequestBody Chauffeur chauffeur)
    {
        chauffeurService.updateChauffeur(chauffeur, employeeId);
    }

}

