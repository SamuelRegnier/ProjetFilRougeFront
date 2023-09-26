import { Theme } from './../model/theme.model';
import { Component, NgModule, OnInit } from '@angular/core';
import { ThemesService } from '../services/themes.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MattersService } from '../services/matters.service';
import { Matter } from '../model/matter.model';
@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  themes!: Theme[];
  errorMessage!: string;
  addingTheme: boolean = false;
  addingMatter: number = 0;
  updatingTheme: number = 0;
  updatingMatter: number[] = [0, 0];
  constructor(private service: ThemesService, private fb: FormBuilder, private service2: MattersService,
    public authService: AuthenticationService,
    private router: Router) { }

  clickOnAddTheme(): void {
    this.addingTheme = !this.addingTheme;
  }

  clickOnAddMatter(id: number): void {
    if (this.addingMatter == id) {
      this.addingMatter = 0;
    } else {
      this.addingMatter = id;
    }
  }

  clickOnUpdateMatter(idm: number, idt: number): void {
    if (this.updatingMatter[0] == idm && this.updatingMatter[1] == idt) {
      this.updatingMatter = [0, 0];
    } else {
      this.updatingMatter = [idm, idt];
    }
  }

  clickOnUpdateTheme(id: number): void {
    if (this.updatingTheme == id) {
      this.updatingTheme = 0;
    } else {
      this.updatingTheme = id;
    }
  }

  ngOnInit(): void {
    this.handleGetAllThemes();
  }

  themeForm = this.fb.group({
    name: ['', [Validators.required]],
  });

  matterForm = this.fb.group({
    name: ['', [Validators.required]],
  });

  handleGetAllThemes() {
    this.service.getAllThemes().subscribe(
      {
        next: data => { this.themes = data },
        error: err => { this.errorMessage = err; }
      }
    );
  }


  handleDeleteMatter(p: Matter) {
    let conf = confirm("Are you sure ? ");
    if (conf == false) return;
    else {
      this.service2.deleteMatter(p).subscribe({
        next: data => {
          console.log("matter id= " + p.id + " is deleted ");
          this.handleGetAllThemes();
        },
        error: err => { this.errorMessage = err; }

      });
    }
  }

  handleDeleteTheme(p: Theme) {
    let conf = confirm("Are you sure ? ");
    if (conf == false) return;
    else {
      this.service.deleteTheme(p).subscribe({
        next: data => {
          console.log("training id= " + p.id + " is deleted ");
          this.handleGetAllThemes();
        },
        error: err => { this.errorMessage = err; }

      });
    }
  }

  onMouseOver(): void {
  }

  addTheme() {
    alert("Êtes-vous sûr de vouloir rajouter ce thème ?");
    const submittedTheme = {
      id: 0,
      nom: this.themeForm.get('name')!.value ?? '',
      listMatter: []
    }
    console.log(submittedTheme);
    this.service.addNewTheme(submittedTheme).subscribe({
      next: data => {
        alert("Cette formation a été créée avec succès ! ");
        this.themeForm.reset;
        this.router.navigateByUrl("/api/themes");
      },
      error: err => {
        console.log(err);
      }
    })
    this.handleGetAllThemes();
    this.clickOnAddTheme();
  }

  updateTheme(id: number) {
    alert("Êtes-vous sûr de vouloir modifier ce thème ?");
    const submittedTheme = {
      id: id,
      nom: this.themeForm.get('name')!.value ?? '',
      listMatter: []
    }
    console.log(submittedTheme);
    this.service.updateTheme(submittedTheme).subscribe({
      next: data => {
        alert("Ce thème a été modifié avec succès ! ");
        this.themeForm.reset;
        this.router.navigateByUrl("/api/themes");
      },
      error: err => {
        console.log(err);
      }
    })
    this.handleGetAllThemes();
    this.clickOnUpdateTheme(id);
  }

  addMatter(theme: Theme) {
    alert("Êtes-vous sûr de vouloir rajouter cette matière ?");
    const submittedMatter = {
      id: 0,
      nom: this.matterForm.get('name')!.value ?? ''
    }
    const themeMatter = {
      matter: submittedMatter,
      theme: theme
    }
    console.log(themeMatter);
    this.service2.addNewMatter(themeMatter).subscribe({
      next: data => {
        alert("Cette matière a été créée avec succès ! ");
        this.matterForm.reset;
        this.router.navigateByUrl("/api/matters");
      },
      error: err => {
        console.log(err);
      }
    })
    this.handleGetAllThemes();
    this.clickOnAddMatter(theme.id);
  }

  updateMatter(matter: Matter, theme: Theme) {
    alert("Êtes-vous sûr de vouloir rajouter cette matière ?");
    const submittedMatter = {
      id: matter.id,
      nom: this.matterForm.get('name')!.value ?? ''
    }
    console.log(submittedMatter);
    this.service2.updateMatter(submittedMatter).subscribe({
      next: data => {
        alert("Cette matière a été modifiée avec succès ! ");
        this.matterForm.reset;
      },
      error: err => {
        console.log(err);
      }
    })
    this.handleGetAllThemes();
    this.clickOnUpdateMatter(matter.id, theme.id);
  }


}
