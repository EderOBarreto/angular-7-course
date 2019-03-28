import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  projectStatusList = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectData : new FormGroup({
        name: new FormControl(null, [Validators.required, this.checkProjectName.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        status: new FormControl('Stable')
      })
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
  checkProjectName(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1){
      return {forbiddenName : true};
    }
    return null;
  }
}
