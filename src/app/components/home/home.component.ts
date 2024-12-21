import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  downloadPDF() {
    const pdfUrl = '../../../assets/files/Sukhpreet_Singh.pdf';
    const pdfName = 'test.pdf';

    const element = document.createElement('a');
    element.setAttribute('href', pdfUrl);
    element.setAttribute('download', pdfName);

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  isDone: boolean = false;


  onDownloadClick() {
    const button = document.querySelector('.btn-circle-download');
    if (button) {
      button.classList.add('load');

      setTimeout(() => {
        button.classList.add('done');
        this.isDone = true;
      }, 1000);

      setTimeout(() => {
        button.classList.remove('load', 'done');
        this.isDone = false;
      }, 5000);
    }
  }

}
