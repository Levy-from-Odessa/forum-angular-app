import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.sass']
})
export class EnterComponent implements OnInit {

  @Output() userChanged = new EventEmitter<string>()


  activeUser = false
  userName = ''

  changeName(e){
    this.userName = e.target.value
  }
  toggleActiveUser(){
    this.activeUser = !this.activeUser
  }

  enterSystem() {
    localStorage.setItem('userName', this.userName)
    this.toggleActiveUser()
    this.userChanged.emit(this.userName)
  }
  leaveSystem(){
    this.userName = " "
    this.toggleActiveUser()
    localStorage.removeItem('userName')
    this.userChanged.emit("")
  }


  constructor() { }

  ngOnInit(): void {
  }

}
