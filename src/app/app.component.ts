import { Component } from '@angular/core';
import { FileUploadService } from "./service/file-upload.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = '0080_CL_WebThreat_Front_NDS';
  selectedFileName: string = '';
  selectedFileURL: string | ArrayBuffer | null = null;

  constructor(fileUploadService: FileUploadService) {
  }

  handleFileSelect(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.selectedFileName = selectedFile.name;
      this.loadSelectedFile(selectedFile);
      console.log(this.selectedFileName);
    }
  }

  loadSelectedFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedFileURL = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}






