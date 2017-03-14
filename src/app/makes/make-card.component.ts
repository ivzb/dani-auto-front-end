import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'make-card',
  template: `
    <div class="team-portrait block cursor-pointer">              
      <div class="title">
        <h2>{{ make.Value }}</h2>
        <!--<h3 class="italic">Developer</h3>-->
      </div>
      <!--<div class="portrait">
        <a href="#">
          <img src="img/portrait2.jpg" alt="Team Portrait">              
          <span class="overlay"><span class="valign"></span><i class="icon-envelope"></i></span>                    
        </a>
      </div>
      <p>Hi, I'm Michael Chang. I am a developer who specializes on CSS, HTML and Javascript. I'm excited to work more and learn more about design.</p>
      <div class="social-media">
        <a href="#" data-toggle="tooltip" title="twitter"><i class="icon-twitter"></i></a>
        <a href="#" data-toggle="tooltip" title="facebook"><i class="icon-facebook"></i></a>
        <a href="#" data-toggle="tooltip" title="linkedin"><i class="icon-linkedin"></i></a>
        <a href="#" data-toggle="tooltip" title="github"><i class="icon-github"></i></a>
        <a href="#" data-toggle="tooltip" title="pinterest"><i class="icon-pinterest"></i></a>
        <span class="stretch"></span>
      </div>-->
    </div>
  `,
  styles: [`
    .caption {
      cursor: pointer;
    }
  `]
})
export class MakeCardComponent {
  @Input() make
}