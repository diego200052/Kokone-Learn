import { Component, OnInit } from '@angular/core';

//import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-diapositiva',
  templateUrl: './diapositiva.component.html',
  styleUrls: ['./diapositiva.component.css']
})
export class DiapositivaComponent implements OnInit {

  /*items: string[] = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados'
  ];*/

  public totalCountTitulo: number = 0 ;
  public totalCountTexto: number = 0 ;

  form: FormGroup;
  formTitulo: FormGroup;
  editorTexto:string = '';
  editorTitulo:string = '';

  tituloHTML:string = '';
  textoHTML:string = '';

  editorText: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '350px',
      minHeight: '350px',
      maxHeight: '350px',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Ingresa el contenido de la diapositiva.',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '3',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'http://localhost:3000/api/upload',
    uploadWithCredentials: false,
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'indent',
        'outdent',
        'subscript',
        'superscript',
        'justifyFull',
        'insertUnorderedList',
        'heading'
      ],
      [
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'toggleEditorMode'
      ]
    ]
};

  editorTitle: AngularEditorConfig = {
  editable: true,
    spellcheck: true,
    height: '80px',
    minHeight: '80px',
    maxHeight: '80px',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Ingresa el título de la diapositva.',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '6',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'http://localhost:3000/api/upload',
  uploadWithCredentials: false,
  sanitize: false,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    ['subscript',
    'superscript',
    'indent',
    'outdent',
    'justifyFull',
    'insertUnorderedList',
    'insertOrderedList',
    'heading'],
    [
    'backgroundColor',
    'fontSize',
    'customClasses',
    'link',
    'unlink',
    'insertImage',
    'insertVideo',
    'toggleEditorMode']
  ]
};

  public fileData;
  public archivoCargado:boolean = false;
  public imageURL:string = "http://localhost:3000";

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  fileProgress(event) {
    this.fileData = event.target.files;
  }

  fnPostImage() {
    const formData = new FormData();    
    for (var i = 0; i < this.fileData.length; i++) {
      formData.append("image", this.fileData[i], this.fileData[i].name); 
     }

    this.http.post('http://localhost:3000/api/upload', formData).subscribe( (response) => {
      this.archivoCargado = true;
      console.log(response)
      this.imageURL = this.imageURL + response['path'];
      console.log(this.imageURL);
    }) 

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      editorTextoName: ['', Validators.required]
    });
    this.formTitulo = this.formBuilder.group({
      editorTituloName: ['', Validators.required]
    });
    console.log(this.editorTitulo);
  }

  /* Event contiene el texto html introducido por el usuario */
  onChange(event) {
    console.log('changed' + event);
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  onChange2(event) {
    console.warn(this.form.value);
    console.log(event);
  }

  onkeytitulo()
  {
    this.formTitulo.value.editorTituloName.length;
    this.totalCountTitulo = this.getHtmlPlainText(this.formTitulo.value.editorTituloName).length;
    if(this.totalCountTitulo >= 65)
    {
      this.formTitulo.patchValue({ editorTituloName: this.tituloHTML });
    }
    else
    {
      this.tituloHTML = this.formTitulo.value.editorTituloName;
    }
  }

  onkeytexto()
  {
    this.form.value.editorTextoName.length;
    this.totalCountTexto = this.getHtmlPlainText(this.form.value.editorTextoName).length;
    if(this.totalCountTexto >= 750)
    {
      this.form.patchValue({ editorTextoName: this.tituloHTML });
    }
    else
    {
      this.tituloHTML = this.form.value.editorTextoName;
    }
  }

  getHtmlPlainText(s: string): string {
		if (!s) {
			return s;
		}

		const parser = new DOMParser();
		const html = parser.parseFromString(s, 'text/html');
		return html.body.textContent;
	}
}
