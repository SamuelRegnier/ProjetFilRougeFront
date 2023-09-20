import { Theme } from './../entities/theme.model';
import { themes } from './../../assets/objects/THEMES';
import { Component, NgModule, OnInit } from '@angular/core';
@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit{
  themes!:Theme[];

  ngOnInit(): void {
    this.themes= themes;
  }

  handleDeleteMatter(theme: any, matter: any) {
    let index = this.themes?.indexOf(theme);
    let index2 = theme.listMatter.indexOf(matter);
    console.log(index, index2);
    this.themes[index].listMatter.splice(index2,1);
}

  handleDeleteTheme(theme: any) {
    let index = this.themes?.indexOf(theme);
    this.themes?.splice(index,1)
  }
  onMouseOver(): void {
    
  }
}
