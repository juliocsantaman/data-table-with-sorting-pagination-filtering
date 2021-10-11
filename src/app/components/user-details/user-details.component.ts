import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: string;
  user: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private userDataService: UserDataService) {

    this.id = this.activatedRoute.snapshot.params.id;

    this.userDataService.getUser(this.id).subscribe(  (data) => {
      this.user = data;
    });
  }

  ngOnInit(): void {
  }

}
