import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-shell',
  imports: [Sidebar, RouterOutlet, Header],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {}
